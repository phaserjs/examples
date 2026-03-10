class Example extends Phaser.Scene
{
    create()
    {
        const { width, height } = this.scale;

        this.add.noisesimplex3d({
            noiseCells: [ 4, 9, 4 ],
            noiseWarpAmount: 0.5
        }, width * 1 / 8, height / 2, width / 4, height);
        this.add.noisesimplex3d({
            noiseCells: [ 4, 9, 4 ],
            noiseWarpAmount: 0.5,
            noiseWarpIterations: 2
        }, width * 3 / 8, height / 2, width / 4, height);
        this.add.noisesimplex3d({
            noiseCells: [ 4, 9, 4 ],
            noiseWarpAmount: 0.5,
            noiseWarpIterations: 3
        }, width * 5 / 8, height / 2, width / 4, height);
        this.add.noisesimplex3d({
            noiseCells: [ 4, 9, 4 ],
            noiseWarpAmount: 0.5,
            noiseWarpIterations: 4
        }, width * 7 / 8, height / 2, width / 4, height);

        this.add.text(10, 10, '1 warp iteration', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 4 + 10, 10, '2 warp iterations', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 2 + 10, 10, '3 warp iterations', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width * 3 / 4 + 10, 10, '4 warp iterations', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
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
