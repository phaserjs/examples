class Example extends Phaser.Scene
{
    mesh;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('sky', 'assets/skies/sky2.png');
        this.load.image('grid', 'assets/pics/uv-grid.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        this.mesh = this.add.mesh2d(400, 300, 'grid',
            [
                -1, -1, 0, 0,
                -1, 1, 0, 1,
                1, -1, 1, 0,
                1, 1, 1, 1,
            ],
            [
                1, 2, 3, 0,
                0, 1, 2, 0,
            ],
            true
        ).setScale(200);

        // Render the mesh using an alternate render node designed for triangles instead of quads.
        // This is an advanced rendering technique.
        // This is useful when you don't know the triangle order,
        // and don't want to run `buildOrderedIndices` to optimize the topology,
        // e.g. if you're working with dynamically generated triangles which might change between frames.
        // It breaks batching with regular sprites, but if you're rendering a lot of mesh data,
        // it's more efficient to use triangles instead of fitting the mesh into quads.
        this.mesh.setRenderAsTriangles(true);

        // Uncomment the following code in a dev build of Phaser to see debug data.
        // You will see two `drawElements` calls, as different render nodes are used.
        // Comment out the line with `setRenderAsTriangles` and the two calls will combine into one,
        // as by default Phaser can batch things together.
        // setTimeout(() => this.renderer.captureFrame(false, true), 100);
    }

    update (time, delta)
    {
        // Do some basic 3D projection.
        const a = time / 1000;
        const x = Math.cos(a);
        const z = Math.sin(a);

        const v = this.mesh.vertices;

        // Orthographic projection: no perspective distortion.
        v[0] = -x; v[1] = -1 - z / 4;
        v[4] = -x; v[5] = 1 - z / 4;
        v[8] = x; v[9] = -1 + z / 4;
        v[12] = x; v[13] = 1 + z / 4;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
