class Example extends Phaser.Scene
{
    gradient;

    preload ()
    {
        this.load.image('sky', 'assets/skies/chrome.png');
    }

    create ()
    {
        this.gradient = this.add.gradient({
            repeatMode: 3, // TRIANGULAR
            start: { x: 0.5, y: 0.5 },
            shape: { x: 0.02, y: 0 },
            shapeMode: 2, // RADIAL
            dither: true,
            bands: [
                {
                    colorStart: 0xffffff,
                    colorEnd: 0x000000,
                    interpolation: 2
                }
            ]
        }, 400, 300, 800, 600);

        // Necessary for captureFrame:
        this.cameras.main.setForceComposite(true);
        this.add.captureFrame('ripples');

        this.add.image(400, 300, 'sky')
        .setScale(1.1)
        .setAlpha(0.9)
        .enableFilters()
        .filters.internal.addDisplacement('ripples');
    }

    update (time)
    {
        this.gradient.offset = time / 400;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
