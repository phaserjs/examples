class Example extends Phaser.Scene
{
    gradient;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('space', 'assets/skies/deep-space.jpg');
        this.load.image('pic', 'assets/pics/anime-market.png');
    }

    create ()
    {
        this.add.image(400, 300, 'space').setScale(800 / 512);

        this.gradient = this.add.gradient({
            repeatMode: 3, // TRIANGULAR
            start: { x: 0, y: 0 },
            shape: { x: 0, y: 0.2 },
            bands: [
                {
                    colorStart: [0, 0, 0, 0],
                    colorEnd: [ 1, 1, 1, 1],
                    interpolation: 2,
                }
            ]
        }, 400, 300, 800, 600);

        // Gradient extends Shader, and it doesn't know how to follow stencil alpha strategies.
        // Set `stencilCompositeCheck` to `true` to trigger compositing.
        // This routes it through a step that automatically converts alpha to stencil.
        this.add.stencil(0, 0, this.gradient, { stencilCompositeCheck: true });

        this.add.image(400, 400, 'pic').setScale(800 / 512);
    }

    update (time, delta)
    {
        this.gradient.offset = (time / 1000) % 2;
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
