class Example extends Phaser.Scene
{
    ufos;

    preload ()
    {
        this.load.image('space', 'assets/skies/space2.png');
        this.load.image('ufo', 'assets/sprites/ufo.png');
    }

    create ()
    {
        this.add.image(400, 300, 'space');

        this.ufos = this.physics.add.group({
            key: 'ufo',
            quantity: 48
        });

        const { x, y, width, height } = this.physics.world.bounds;

        for (const ufo of this.ufos.getChildren())
        {
            ufo.setRandomPosition(x, y, width, height);
            ufo.body.velocity.setToPolar(0.125 * Math.PI, Phaser.Math.FloatBetween(50, 100));
        }
    }

    update ()
    {
        this.physics.world.wrap(this.ufos, 24);
    }
}

const config = {
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: Example
};

const game = new Phaser.Game(config);
