class Example extends Phaser.Scene
{
    sprite2;
    sprite1;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        this.sprite1 = this.add.image(600, 100, 'mushroom');
        this.physics.world.enable([ this.sprite1 ]);
        this.sprite1.body.setVelocity(-100, 200).setBounce(1, 1).setCollideWorldBounds(true);

        this.sprite2 = this.add.image(0, 0, 'mushroom');
        this.physics.world.enable([ this.sprite2 ]);
        this.sprite2.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

        const container = this.add.container(200, 50, [ this.sprite2 ]);
    }

    update ()
    {
        this.physics.world.collide(this.sprite1, this.sprite2);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
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
