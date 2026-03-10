class Example extends Phaser.Scene
{
    create()
    {
        const { width, height } = this.scale;

        this.add.noisesimplex2d({
            noiseCells: [ 8, 9 ],
            noisePeriod: [ 4, 3 ],
            noiseIterations: 2
        }, width / 4, height / 2, width / 2, height);

        this.add.noisesimplex3d({
            noiseCells: [ 8, 9, 8 ],
            noisePeriod: [ 4, 3, 4 ],
            noiseIterations: 2
        }, width * 3 / 4, height / 2, width / 2, height);

        this.add.text(10, 10, '2D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 2 + 10, 10, '3D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
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
