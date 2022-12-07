class Example extends Phaser.Scene
{
    lastFired = 0;
    cursors;
    stats;
    speed;
    ship;
    bullets;

    preload ()
    {
        this.load.image('ship', 'assets/sprites/ship.png');
        this.load.image('bullet', 'assets/sprites/bullet.png');
    }

    create ()
    {
        class Bullet extends Phaser.GameObjects.Image
        {
            constructor (scene)
            {
                super(scene, 0, 0, 'bullet');

                this.speed = Phaser.Math.GetSpeed(400, 1);
            }

            fire (x, y)
            {
                this.setPosition(x, y - 50);

                this.setActive(true);
                this.setVisible(true);
            }

            update (time, delta)
            {
                this.y -= this.speed * delta;

                if (this.y < -50)
                {
                    this.setActive(false);
                    this.setVisible(false);
                }
            }
        }

        this.bullets = this.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });

        this.ship = this.add.sprite(400, 500, 'ship').setDepth(1);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.speed = Phaser.Math.GetSpeed(300, 1);
    }

    update (time, delta)
    {
        if (this.cursors.left.isDown)
        {
            this.ship.x -= this.speed * delta;
        }
        else if (this.cursors.right.isDown)
        {
            this.ship.x += this.speed * delta;
        }

        if (this.cursors.up.isDown && time > this.lastFired)
        {
            const bullet = this.bullets.get();

            if (bullet)
            {
                bullet.fire(this.ship.x, this.ship.y);

                this.lastFired = time + 50;
            }
        }
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
