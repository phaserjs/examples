class Example extends Phaser.Scene
{
    noise;
    toggle = false;

    create()
    {
        const { width, height } = this.scale;

        this.noise = this.add.noisesimplex2d({
            noiseCells: [ 8, 4 ],
            noiseSeed: [ 3, 2 ], // Eliminates some distracting details
            noiseIterations: 4,
            noiseColorStart: 0x446688,
            noiseColorEnd: 0xbbffaa,
        }, width / 4, height / 2, width / 2, height / 2)
        .setRenderToTexture('noise');

        this.add.image(0, 0, 'noise').setOrigin(0);
        this.add.image(0, height / 2, 'noise').setOrigin(0);
        this.add.image(width / 2, 0, 'noise').setOrigin(0);
        this.add.image(width / 2, height / 2, 'noise').setOrigin(0);

        this.add.text(10, 10, 'Click to toggle wrap', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);

        this.input.on('pointerdown', () => {
            this.toggle = !this.toggle;
            if (this.toggle)
            {
                this.noise.noisePeriod = [ 0, 0 ];
            }
            else
            {
                this.noise.noisePeriod = [ 8, 4 ];
            }
        });
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
