class Example extends Phaser.Scene
{
    bullets;
    ship;
    spacebar;

    preload ()
    {
        this.load.image('space', 'assets/tests/space/nebula.jpg');
        this.load.image('bullet', 'assets/sprites/bullets/bullet10.png');
        this.load.image('ship', 'assets/sprites/shmup-ship2.png');
    }

    create ()
    {
        class Bullet extends Phaser.GameObjects.Image
        {
            constructor (scene)
            {
                super(scene, 0, 0, 'bullet');

                this.speed = Phaser.Math.GetSpeed(600, 1);
            }

            fire (x, y)
            {
                this.setPosition(x, y);

                this.setActive(true);
                this.setVisible(true);
            }

            update (time, delta)
            {
                this.x += this.speed * delta;

                if (this.x > 820)
                {
                    this.setActive(false);
                    this.setVisible(false);
                }
            }
        }

        this.bullets = this.add.group({
            classType: Bullet,
            maxSize: 30,
            runChildUpdate: true
        });

        this.add.image(400, 300, 'space');

        this.ship = this.add.image(100, 300, 'ship').setDepth(1000);

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update ()
    {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar))
        {
            const bullet = this.bullets.get();

            if (bullet)
            {
                bullet.fire(this.ship.x, this.ship.y);
            }
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
