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

        // Set entire stencil to constant.
        this.add.stencil(0, 0, undefined, { stencilLayerMode: 'clear', stencilClearValue: 1 });

        // Add overlapping layers.
        // Because they're in `clearRegion` mode, they don't layer up.
        this.add.stencil(0, 0,
            [
                this.add.ellipse(400, 200, 300, 300, 0x000000),
                this.add.ellipse(300, 400, 300, 300, 0x000000),
                this.add.ellipse(500, 400, 300, 300, 0x000000),
            ],
            { stencilLayerMode: 'clearRegion' }
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
