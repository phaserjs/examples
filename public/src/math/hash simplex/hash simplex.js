class Example extends Phaser.Scene
{
    config = {
        noiseCells: [ 16 / 2, 9 / 2 ],
        noiseIterations: 3,
        noiseWarpAmount: 0.5,
        noiseColorStart: 0x88aaff,
        noiseColorEnd: 0x4466aa,
    };
    leaf;
    noise;

    preload ()
    {
        this.load.image('leaf', 'assets/particles/leaf2.png');

        this.leaf.enableFilters().filters.internal.addGlow(0x88aaff);
    }

    create()
    {
        const { width, height } = this.scale;

        this.noise = this.add.noisesimplex2d(this.config, width / 2, height / 2, width, height);

        this.leaf = this.add.image(640, 200, 'leaf');
    }

    update (time, delta)
    {
        const { width, height } = this.scale;
        this.noise.noiseFlow = time / 500;
        this.config.noiseFlow = this.noise.noiseFlow;

        const contourX = Phaser.Math.HashSimplex([this.leaf.x / width, this.leaf.y / height], config);
        const contourY = Phaser.Math.HashSimplex([this.leaf.x / width, this.leaf.y / height], { ...config, noiseSeed: [ 3, 4 ] }) + 1;

        this.leaf.x += contourX * delta / 64;
        this.leaf.y += contourY * delta / 64;

        const angle = Phaser.Math.Angle.GetShortestDistance(this.leaf.rotation, Math.atan2(contourY, contourX));
        this.leaf.rotation += angle * 0.03;

        if (this.leaf.x < -100 || this.leaf.x > 1500) {
            this.leaf.x = 640;
            this.leaf.y = -100;
        }
        if (this.leaf.y > 900) { this.leaf.y = -100; }
        if (this.leaf.y < -300) { this.leaf.y = -100; }
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
