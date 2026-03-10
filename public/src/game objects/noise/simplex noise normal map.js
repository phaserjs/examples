class Example extends Phaser.Scene
{
    create()
    {
        const { width, height } = this.scale;

        this.noise1 = this.add.noisesimplex2d({
            noiseCells: [ 3, 4 ],
            noiseIterations: 4,
            noiseValueFactor: 0.4 // Eliminates some regions where octaves add > 1.
        }, width * 1 / 4, height / 2, width / 2, height);

        this.noise2 = this.add.noisesimplex2d({
            noiseCells: [ 3, 4 ],
            noiseIterations: 4,
            noiseValueFactor: 0.4,
            noiseNormalMap: true,
            noiseNormalScale: 8
        }, width * 3 / 4, height / 2, width / 2, height);
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
