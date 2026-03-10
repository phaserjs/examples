class Example extends Phaser.Scene
{
    noise;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/skies/spookysky.jpg');
    }

    create()
    {
        const { width, height } = this.scale;

        this.noise = this.add.noisesimplex2d({
            noiseCells: [ 4, 32 ],
            noiseNormalMap: true,
            noiseNormalScale: 0.3,
            noiseWarpAmount: 1
        }, 0, 0, width, height).setRenderToTexture('noise-normal');

        // Create a blank texture.
        this.textures.addFlatColor('blank', width, height, 0xffffff, 1);

        const bg = this.add.image(width / 2, height / 2, 'blank').setFlipY(true);

        bg.enableFilters().filters.internal.addImageLight({
            environmentMap: 'bg',
            normalMap: 'noise-normal',
            bulge: 1
        });
    }

    update (time)
    {
        const t = time / 800;

        this.noise.noiseFlow = t % (Math.PI * 2);
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
