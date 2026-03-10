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
            noiseColorStart: 0xffaa88,
            noiseColorEnd: 0x442266
        }, width / 4, height / 2, width / 2, height);

        this.noise3d = this.add.noisesimplex3d({
            noiseCells: [ 8, 9, 4 ],
            noiseIterations: 3,
            noiseColorStart: 0x22dd22,
            noiseColorEnd: 0x662244
        }, width * 3 / 4, height / 2, width / 2, height);

        this.add.text(10, 10, '2D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
        this.add.text(width / 2 + 10, 10, '3D', { fontSize: 24 }).setStroke('#ff8844', 2).setShadow(2, 2, '#333333', 2, true, false);
    }

    update (time)
    {
        // Prevent long-term precision loss.
        // Flow is cyclic, every 2PI radians.
        const t = (time / 1000) % (Math.PI * 2);

        this.noise2d.noiseFlow = t;
        this.noise3d.noiseFlow = t;
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
