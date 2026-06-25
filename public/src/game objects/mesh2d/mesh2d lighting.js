class Example extends Phaser.Scene
{
    mesh;
    pointerLight;
    vertices;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('gold', [ 'assets/textures/gold.png', 'assets/textures/gold-n.png' ]);
    }

    create ()
    {
        // Construct a more complex mesh.
        const res = 64;
        const vertices = [];
        const indices = [];
        const tris = [];
        for (let u = 0; u < res; u++)
        for (let v = 0; v < res; v++)
        {
            vertices.push((u - res / 2) * 14, (v - res / 2) * 14, u / res, v / res);
            if (u < res - 1 && v < res - 1)
            {
                const i = u + v * res;
                tris.push([i, i + 1, i + res, 0], [ i + res + 1, i + 1, i + res, 0]);
            }
        }
        while (tris.length > 0)
        {
            const i = Math.floor(Math.random() * tris.length);
            const tri = tris.splice(i, 1)[0];
            indices.push(...tri);
        }
        const mesh = this.add.mesh2d(400, 300, 'gold', vertices, indices, true);
        mesh.buildOrderedIndices(2, true);

        this.mesh = mesh;
        this.vertices = vertices.slice(); // Cache a copy of the vertices.

        // Add lights.
        this.lights.enable().setAmbientColor(0x446688);
        this.pointerLight = this.lights.addLight(200, 200, 400);
        mesh.setLighting(true);
    }

    update (time, delta)
    {
        // Warp the mesh.
        const v = this.mesh.vertices;
        const src = this.vertices;

        const noiseConfigX = {
            noiseCells: [ 1, 1, 1 ],
            noiseSeed: [ 2, 3, 4 ],
            noiseFlow: time / 3000,
            noiseIterations: 4,
            noiseContributionPower: 4
        };
        const noiseConfigY = { ...noiseConfigX, noiseSeed: [ 5, 6, 7 ] };

        for (let i = 0; i < v.length; i += 4)
        {
            const x = src[i];
            const y = src[i + 1];
            const vec = [ x * 1.003, y * 1.003 ];
            v[i] = Phaser.Math.HashSimplex(vec, noiseConfigX) * 64 + x;
            v[i + 1] = Phaser.Math.HashSimplex(vec, noiseConfigY) * 64 + y;
        }

        // Move the light around.
        // Note how the light illuminates the distorted surface,
        // not the original texture.
        this.pointerLight.x = 400 + 300 * Math.cos(time / 1000);
        this.pointerLight.y = 300 + 300 * Math.sin(time / 1000);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
    render: {
        selfShadow: true
    }
};

const game = new Phaser.Game(config);
