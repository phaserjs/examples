class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('gradient1', 'assets/skies/darkstone.png');
        this.load.image('gradient2', 'assets/skies/gradient22.png');
    }

    create ()
    {
        this.add.image(400, 300, 'gradient1');

        // One stencil can add several layers, if the source objects overlap.
        this.add.stencil(0, 0,
            [
                this.add.ellipse(400, 200, 300, 300, 0x000000),
                this.add.ellipse(300, 400, 300, 300, 0x000000),
                this.add.ellipse(500, 400, 300, 300, 0x000000),
            ]
        );

        // This only subtracts one layer; the places where 2 or 3 layers overlap
        // are still stenciled.
        this.add.stencil(0, 0,
            [
                this.add.ellipse(400, 350, 300, 300, 0x000000)
            ],
            { stencilLayerMode: 'subtractLayer' }
        );

        this.add.image(400, 300, 'gradient2');
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
