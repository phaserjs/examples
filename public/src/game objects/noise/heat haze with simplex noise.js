class Example extends Phaser.Scene
{
    noise;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/pics/space-wreck.jpg');
        this.load.image('chillno', 'assets/pics/touhou1.png');
    }

    create()
    {
        const { width, height } = this.scale;

        this.noise = this.add.noisesimplex2d({
            noiseCells: [ 9, 9 ],
            noiseIterations: 2,
            noiseNormalMap: true,
        }, 0, 0, width / 8, height / 8).setRenderToTexture('noise');

        const bg = this.add.image(width / 2, height / 2 + 128, 'bg').setScale(1.7);

        bg.enableFilters().filters.internal.addDisplacement('noise', 0.1);

        this.add.image(400, height, 'chillno').setOrigin(0, 1);
    }

    update (time)
    {
        const t = time / 1000;

        this.noise.noiseFlow = t % (Math.PI * 2);
        this.noise.noiseOffset = [ -t, -t ];
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
