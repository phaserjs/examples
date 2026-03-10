class Example extends Phaser.Scene
{
    noise2d;
    noise3d;

    create()
    {
        const { width, height } = this.scale;

        this.noise2d = this.add.noisesimplex2d({
            noiseCells: [ 8, 9 ],
            noiseIterations: 3,
            noiseColorEnd: 0x88ff88
        }, width / 4, height / 2, width / 2, height);

        this.noise3d = this.add.noisesimplex3d({
            noiseCells: [ 8, 9, 4 ],
            noiseIterations: 3,
            noiseColorEnd: 0x8888ff
        }, width * 3 / 4, height / 2, width / 2, height);

        this.add.text(10, 10, '2D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 2 + 10, 10, '3D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
    }

    update (time)
    {
        const t = time / 1000;

        this.noise2d.noiseWarpAmount = Math.sin(t) * 0.5 + 0.5;
        this.noise3d.noiseWarpAmount = Math.sin(t) * 0.5 + 0.5;
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
