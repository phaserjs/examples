class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('grad', 'assets/skies/fire.png');
    }

    create()
    {
        const { width, height } = this.scale;

        this.add.noise({
            noiseRandomNormal: true
        }, 0, 0, width / 16 / 3, height / 16)
        .setRenderToTexture('noise');

        // The texture we'll distort.
        const base = this.add.image(width  * 1 / 6, height / 2, 'grad');
        Phaser.Actions.FitToRegion(base, 0, { x: 0, y: 0, width: width / 3, height: height });

        // Visualize the normal noise.
        // Rendering to texture turns off rendering directly to the canvas.
        const noise = this.add.image(width / 2, height / 2, 'noise');
        Phaser.Actions.FitToRegion(noise, 0, { x: width / 3, y: 0, width: width / 3, height: height });

        // Apply normal noise to the texture.
        const image = this.add.image(width * 5 / 6, height / 2, 'grad');
        Phaser.Actions.FitToRegion(image, 0, { x: width * 2 / 3, y: 0, width: width / 3, height: height });
        image.enableFilters().filters.internal.addDisplacement('noise', 0.1, 0.1);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
