class Example extends Phaser.Scene
{
    noise1;
    noise2;
    noise3;
    noise4;

    create()
    {
        const { width, height } = this.scale;

        // Four variants, differing only in noise adjustments.

        this.noise1 = this.add.noisesimplex2d({
            noiseCells: [ 4, 9 ],
            noiseIterations: 2
        }, width * 1 / 8, height / 2, width / 4, height);

        this.noise2 = this.add.noisesimplex2d({
            noiseCells: [ 4, 9 ],
            noiseIterations: 2,
            noiseDetailPower: 4 // Increase detail quickly.
        }, width * 3 / 8, height / 2, width / 4, height);

        this.noise3 = this.add.noisesimplex2d({
            noiseCells: [ 4, 9 ],
            noiseIterations: 2,
            noiseContributionPower: 1 // Subsequent octaves decay slower.
        }, width * 5 / 8, height / 2, width / 4, height);

        this.noise4 = this.add.noisesimplex2d({
            noiseCells: [ 4, 9 ],
            noiseIterations: 2,
            noiseFlowPower: 8 // Subsequent octaves flow faster
        }, width * 7 / 8, height / 2, width / 4, height);

        this.add.text(10, 10, 'Default iteration', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 4 + 10, 10, 'Detail +', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 2 + 10, 10, 'Contribution decay -', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width * 3 / 4 + 10, 10, 'Flow +', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
    }

    update (time)
    {
        const t = (time / 1000) % (Math.PI * 2);

        this.noise1.noiseFlow = t;
        this.noise2.noiseFlow = t;
        this.noise3.noiseFlow = t;
        this.noise4.noiseFlow = t;
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
