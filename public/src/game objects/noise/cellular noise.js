class Example extends Phaser.Scene
{
    create()
    {
        const { width, height } = this.scale;

        this.add.noisecell2d({ noiseCells: [ 5, 9] }, width * 1 / 6, height / 2, width / 3, height);
        this.add.noisecell3d({ noiseCells: [ 5, 9, 1 ] }, width * 3 / 6, height / 2, width / 3, height);
        this.add.noisecell4d({ noiseCells: [ 5, 9, 1, 1 ] }, width * 5 / 6, height / 2, width / 3, height);

        this.add.text(10, 10, '2D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 3 + 10, 10, '3D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width * 2 / 3 + 10, 10, '4D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
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
