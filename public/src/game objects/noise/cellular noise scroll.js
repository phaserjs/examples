class Example extends Phaser.Scene
{
    noise1;
    noise2;
    noise3;

    create()
    {
        const { width, height } = this.scale;

        this.noise1 = this.add.noisecell2d({ noiseCells: [ 5, 9] }, width * 1 / 6, height / 2, width / 3, height);
        this.noise2 = this.add.noisecell3d({ noiseCells: [ 5, 9, 1 ] }, width * 3 / 6, height / 2, width / 3, height);
        this.noise3 = this.add.noisecell4d({ noiseCells: [ 5, 9, 1, 1 ] }, width * 5 / 6, height / 2, width / 3, height);

        this.add.text(10, 10, '2D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 3 + 10, 10, '3D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width * 2 / 3 + 10, 10, '4D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
    }

    update (time)
    {
        const t = time / 1000;

        // Circular offset.
        this.noise1.noiseOffset[0] = Math.cos(t);
        this.noise1.noiseOffset[1] = Math.sin(t);

        // Linear offset.
        // Note that precision will eventually decay - you should loop the input.
        this.noise2.noiseOffset[0] = t;

        // Multi-dimensional offset.
        this.noise3.noiseOffset[0] = t
        this.noise3.noiseOffset[1] = Math.sin(t);
        this.noise3.noiseOffset[2] = t
        this.noise3.noiseOffset[3] = Math.sin(t);
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
