class Example extends Phaser.Scene
{
    noise2;
    noise3;

    create()
    {
        const { width, height } = this.scale;

        this.add.noisecell2d({ noiseCells: [ 5, 9] }, width * 1 / 6, height / 2, width / 3, height);
        this.noise2 = this.add.noisecell3d({ noiseCells: [ 5, 9, 1 ] }, width * 3 / 6, height / 2, width / 3, height);
        this.noise3 = this.add.noisecell4d({ noiseCells: [ 5, 9, 1, 1 ] }, width * 5 / 6, height / 2, width / 3, height);

        this.add.text(10, 10, '2D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 3 + 10, 10, '3D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width * 2 / 3 + 10, 10, '4D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
    }

    update (time)
    {
        // Scroll the Z axis.
        // Note that this will lose precision once it reaches high values.

        const t = time / 5000;

        // 2D noise has no extra dimension to offset.

        this.noise2.noiseOffset[2] = t;
        this.noise3.noiseOffset[2] = t;
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
