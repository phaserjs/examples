class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('gradient1', 'assets/skies/darkstone.png');
        this.load.image('gradient2', 'assets/skies/gradient12.png');
        this.load.image('sprite', 'assets/sprites/spinObj_01.png');
    }

    create ()
    {
        this.add.image(400, 300, 'gradient1');
        this.add.image(200, 200, 'sprite').setScale(2);

        // Cut holes in a screen-wide stencil.
        this.add.stencil(0, 0, this.add.rectangle(400, 300, 800, 600, 0x000000));
        this.add.stencil(600, 200, this.add.image(0, 0, 'sprite').setScale(2), { stencilLayerMode: 'subtractLayer' });

        // Threshold stencil alpha at 0.5: fringes persist.
        this.add.stencil(200, 450, this.add.image(0, 0, 'sprite').setScale(2), { stencilLayerMode: 'subtractLayer', stencilAlphaStrategy: 0.5 });

        // Threshold stencil alpha at 1: fringes removed.
        this.add.stencil(600, 450, this.add.image(0, 0, 'sprite').setScale(2), { stencilLayerMode: 'subtractLayer', stencilAlphaStrategy: 1 });

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
