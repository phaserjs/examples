class Example extends Phaser.Scene
{
    mouseY = 0;
    mouseX = 0;
    isDown = false;
    lastFired = 0;
    stats;
    speed;
    ship;
    bullets;

    preload ()
    {
        this.load.image('ship', 'assets/sprites/ship.png');
        this.load.image('bullet1', 'assets/sprites/bullets/bullet11.png');
    }

    create ()
    {
        class Bullet extends Phaser.GameObjects.Image
        {
            constructor (scene)
            {
                super(scene, 0, 0, 'bullet1');

                this.incX = 0;
                this.incY = 0;
                this.lifespan = 0;

                this.speed = Phaser.Math.GetSpeed(600, 1);
            }

            fire (x, y)
            {
                this.setActive(true);
                this.setVisible(true);

                //  Bullets fire from the middle of the screen to the given x/y
                this.setPosition(400, 300);

                const angle = Phaser.Math.Angle.Between(x, y, 400, 300);

                this.setRotation(angle);

                this.incX = Math.cos(angle);
                this.incY = Math.sin(angle);

                this.lifespan = 1000;
            }

            update (time, delta)
            {
                this.lifespan -= delta;

                this.x -= this.incX * (this.speed * delta);
                this.y -= this.incY * (this.speed * delta);

                if (this.lifespan <= 0)
                {
                    this.setActive(false);
                    this.setVisible(false);
                }
            }
        }

        this.bullets = this.add.group({
            classType: Bullet,
            maxSize: 50,
            runChildUpdate: true
        });

        this.ship = this.add.sprite(400, 300, 'ship').setDepth(1);

        this.input.on('pointerdown', pointer =>
        {

            this.isDown = true;
            this.mouseX = pointer.x;
            this.mouseY = pointer.y;

        });

        this.input.on('pointermove', pointer =>
        {

            this.mouseX = pointer.x;
            this.mouseY = pointer.y;

        });

        this.input.on('pointerup', pointer =>
        {

            this.isDown = false;

        });
    }

    update (time, delta)
    {

        if (this.isDown && time > this.lastFired)
        {
            const bullet = this.bullets.get();

            if (bullet)
            {
                bullet.fire(this.mouseX, this.mouseY);

                this.lastFired = time + 50;
            }
        }

        this.ship.setRotation(Phaser.Math.Angle.Between(this.mouseX, this.mouseY, this.ship.x, this.ship.y) - Math.PI / 2);

    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
