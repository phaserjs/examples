class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        //  64 x 32 = 2048

        for (let y = 0; y < 32; y++)
        {
            for (let x = 0; x < 64; x++)
            {
                this.add.image(x * 16, y * 16, 'mushroom').setOrigin(0);
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 512,
    render: {
        //  A custom batch size of 1024 quads
        batchSize: 1024
    },
    scene: Example
};

const game = new Phaser.Game(config);
