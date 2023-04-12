class Example extends Phaser.Scene
{
    container;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        const image1 = this.add.image(0, -30, 'mushroom');
        const image2 = this.add.image(-40, 30, 'mushroom');
        const image3 = this.add.image(40, 30, 'mushroom');

        this.container = this.add.container(400, 200, [ image1, image2, image3 ]);

        //  A Container has a default size of 0x0, so we need to give it a size before enabling a physics
        //  body or it'll be given the default body size of 64x64.
        this.container.setSize(128, 64);

        this.physics.world.enable(this.container);

        this.container.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);
    }

    update ()
    {
        if (this.container.body.velocity.x < 0)
        {
            this.container.rotation -= 0.02;
        }
        else
        {
            this.container.rotation += 0.02;
        }
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
