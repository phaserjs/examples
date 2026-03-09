class Example extends Phaser.Scene
{
    noise1;
    noise2;
    noise3;

    create()
    {
        const { width, height } = this.scale;

        const config = {
            noiseCells: [ 5, 9, 4, 4 ],
            noiseColorStart: 0xffffff,
            noiseColorEnd: [ 0, 0, 0, 0 ]
        };

        this.noise1 = this.add.noisecell4d(config, width * 1 / 6, height / 2, width / 3, height);
        this.noise2 = this.add.noisecell4d({
            ...config,
            noiseIterations: 2
        }, width * 3 / 6, height / 2, width / 3, height);
        this.noise3 = this.add.noisecell4d({
            ...config,
            noiseIterations: 5
        }, width * 5 / 6, height / 2, width / 3, height);

        this.add.text(10, 10, '1 iteration', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 3 + 10, 10, '2 iterations', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width * 2 / 3 + 10, 10, '5 iterations', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
    }

    update (time)
    {
        const t = time / 10000;
        const c = Math.cos(t);
        const s = Math.sin(t);

        this.noise1.noiseOffset[0] = c;
        this.noise1.noiseOffset[1] = s;
        this.noise1.noiseOffset[2] = c / 4;
        this.noise1.noiseOffset[3] = s / 4;

        this.noise2.noiseOffset[0] = c;
        this.noise2.noiseOffset[1] = s;
        this.noise2.noiseOffset[2] = c / 4;
        this.noise2.noiseOffset[3] = s / 4;

        this.noise3.noiseOffset[0] = c;
        this.noise3.noiseOffset[1] = s;
        this.noise3.noiseOffset[2] = c / 4;
        this.noise3.noiseOffset[3] = s / 4;
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
