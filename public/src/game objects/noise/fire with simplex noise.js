class Example extends Phaser.Scene
{
    fireNoise;
    fireWarp;
    fireRope;

    create()
    {
        const { width, height } = this.scale;

        this.add.gradient({
            bands: {
                colorStart: 0xffffff,
                colorEnd: 0x000000,
                interpolation: 4,
            },
            shapeMode: 2,
            start: { x: 0.5, y: 0.5 },
            shape: { x: 0.5, y: 0 }
        }, 0, 0, 256, 256).setRenderToTexture('fire-mask');

        this.fireNoise = this.add.noisesimplex2d({
            noiseCells: [ 4, 4 ],
            noiseIterations: 3,
            noiseValueAdd: 0.2
        }, 0, 0, 256, 256).setRenderToTexture('fire-noise');

        this.fireWarp = this.add.noisesimplex2d({
            noiseCells: [ 2, 2 ],
            noiseSeed: [ 11, 12 ],
            noiseIterations: 3,
            noiseNormalMap: true,
            noiseNormalScale: 2
        }, 0, 0, 256, 256).setRenderToTexture('fire-warp');

        this.add.image(128, 128, 'fire-noise');
        this.add.image(128, 128 + 256, 'fire-mask');
        this.add.image(128, 128 + 256 * 2, 'fire-warp');

        const fire = this.add.image(0, 0, 'fire-noise')
        .setOrigin(0)
        .setVisible(false)
        .enableFilters();

        fire.filters.internal.addBlend('fire-mask', Phaser.BlendModes.MULTIPLY);
        fire.filters.internal.addDisplacement('fire-warp', 1, 1);
        fire.filters.internal.addGradientMap({
            ramp: [
                {
                    colorStart: [ 0, 0, 0, 0 ], // Transparent
                    colorEnd: [ 0.5, 0.1, 0.1 ],
                    size: 0.1
                },
                {
                    colorStart: [ 0.5, 0.1, 0.1 ],
                    colorEnd: [ 1, 1, 0.3 ],
                    size: 0.3
                },
                {
                    colorStart: [ 1, 1, 0.3 ],
                    colorEnd: [ 1, 1, 1 ],
                    size: 0.7
                },
            ]
        });

        const fireTexture = this.add.renderTexture(128 + 256, 128, 256, 256)
        .setRenderMode('all', true)
        .clear()
        .draw(fire);

        fireTexture.saveTexture('fire');


        // This is one way you might stylize fire.
        const fireSprite = this.add.image(128 + 256, 128 + 256, 'fire')
        .enableFilters();

        fireSprite.filters.internal.addQuantize({
            mode: 1,
            steps: [ 16, 2, 2, 1 ],
            // dither: true
        });
        fireSprite.filters.internal.addBlocky();


        // This is a way to sculpt fire to your needs.
        this.fireRope = this.add.rope(width * 3 / 4, height * 5 / 7, 'fire', null, 16, false);
        this.fireRope.setScale(0.5);
        this.add.pointlight(this.fireRope.x, this.fireRope.y, 0xffcc88, 128, 0.2);
    }

    update (time)
    {
        const t = time / 1000;

        this.fireNoise.noiseOffset[1] = -t * 8;
        this.fireNoise.noiseFlow = t * 2;

        this.fireWarp.noiseOffset[1] = -t * 2;
        this.fireWarp.noiseFlow = t * 2;

        const pointCount = this.fireRope.points.length;
        const fireRopePoints = [];
        for (let i = 0; i < pointCount; i++)
        {
            const flail = 1 - (i + 1) / pointCount;
            fireRopePoints.push({
                x: Math.sin(t * 8 + i / 4) * flail * 128 + flail * 256,
            y: -768 * flail + Math.sin(t * 7 + i / 5) * 128 * flail
            });
        }
        this.fireRope.setPoints(fireRopePoints);
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
