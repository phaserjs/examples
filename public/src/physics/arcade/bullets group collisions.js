class Bullet extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'bullet');
    }

    fire (x, y)
    {
        this.enableBody(true, x, y, true, true);

        this.setVelocityY(-300);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.y <= -32)
        {
            this.disableBody(true, true);
        }
    }
}

class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 5,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    fireBullet (x, y)
    {
        let bullet = this.getFirstDead(false);

        if (bullet)
        {
            bullet.fire(x, y);
        }
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.bullets;
        this.ship;
        this.enemy;
    }

    preload ()
    {
        this.load.image('bullet', 'assets/sprites/bullets/bullet7.png');
        this.load.image('ship', 'assets/sprites/bsquadron1.png');
        this.load.spritesheet('enemy', 'assets/sprites/bsquadron-enemies.png', { frameWidth: 192, frameHeight: 160 });
    }

    create ()
    {
        this.bullets = new Bullets(this, { enable: false });

        this.ship = this.add.image(400, 500, 'ship');

        this.enemy = this.physics.add.image(400, 200, 'enemy');
        this.enemy.state = 3;
        this.enemy.body.setSize(180, 120, false);

        this.physics.add.overlap(
            this.enemy,
            this.bullets,
            function (enemy, bullet)
            {
                bullet.disableBody(true, true);
                enemy.state -= 1;

                if (enemy.state === 0)
                {
                    enemy.setFrame(3);
                    enemy.disableBody();
                }
            }
        );

        this.input.on('pointermove', (pointer) =>
        {
            this.ship.x = pointer.x;
        });

        this.input.on('pointerdown', (pointer) =>
        {
            this.bullets.fireBullet(this.ship.x, this.ship.y);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: Example
};

let game = new Phaser.Game(config);
