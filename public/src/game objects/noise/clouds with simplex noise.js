class Example extends Phaser.Scene
{
    cloudLayers = [];

    create()
    {
        const { width, height } = this.scale;

        this.add.gradient({
            bands: [
                {
                    colorStart: 0xaa4422,
                    colorEnd: 0xffaa88,
                    colorSpace: 1
                }
            ],
            start: { x: 0, y: 1 },
            shape: { x: 0, y: -1 }
        }, width / 2, height / 2, width, height);

        const addCloudLayer = (k) => {
            const c = 1 - k * k * 0.5;
            const noise = this.add.noisesimplex3d({
                noiseOffset: [ 0, 0, k / 4 ], // Depth evolution
                noiseCells: [ 4, 4, 4 ],
                noiseIterations: 4, // Nice level of detail.
                noiseColorStart: [ 1, 1, c, 0 ], // Tint bright layers gold.
                noiseColorEnd: [ 1, c, c, 0.2 ], // Tint shadows red.
                noiseValueAdd: 0.1, // Increase open areas.
                noiseWarpAmount: 0.1,
                noiseWarpIterations: 3
            }, width / 2, height / 2 + k * 64, width / 4, width / 4)
            .setScale(5 - k / 1.7, (5 - k) / 1.7); // Simulate parallax.

            this.cloudLayers.push(noise);
        };

        // Add several layers of clouds.
        // Adjust the Z offset for every layer, so the clouds change with height.
        // This causes a lot of overdraw; you'd probably want to pre-render it in production.
        for (let i = 0; i <= 1; i += 0.05)
        {
            addCloudLayer(i);
        }
    }

    update (time)
    {
        for (const cloudLayer of this.cloudLayers)
        {
            cloudLayer.noiseOffset[0] = -time / 5000;
            cloudLayer.noiseOffset[1] = -time / 15000;
            cloudLayer.noiseFlow = time / 4000;
        }
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
