class Example extends Phaser.Scene
{
    static3;
    static2;
    static1;
    sprite;

    preload ()
    {
        this.load.image('bar', 'assets/sprites/healthbar.png');
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        this.sprite = this.physics.add.image(100, 100, 'mushroom');

        this.static1 = this.physics.add.staticImage(700, 100, 'bar');
        this.static2 = this.physics.add.staticImage(100, 400, 'bar');
        this.static3 = this.physics.add.staticImage(500, 300, 'bar');

        this.sprite.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

        this.input.on('pointerdown', () =>
        {

            this.static1.x -= 50;

            // static1.setScale(3, 5);
            this.static1.refreshBody();

        }, this);
    }

    update ()
    {
        this.physics.world.collide(this.sprite, [ this.static1, this.static2, this.static3 ]);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
