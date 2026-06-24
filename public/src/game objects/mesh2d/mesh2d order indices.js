class Example extends Phaser.Scene
{
    mesh;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('grid', 'assets/pics/uv-grid.jpg');
    }

    create ()
    {
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

        // Optimize the mesh by ordering indices for efficient rendering.
        // You should always optimize your meshes if they're static;
        // the time taken to cache them can save a lot of time in rendering.
        // Level 2 is most intensive: it takes longer to run, but produces more compact data.
        // Level 1 will often work well, as it can compact neighboring triangles.
        // Level 0 runs very quickly, but uses the most space because it stores triangles as quads.
        // `true` is a shortcut for `setUseOrderedIndices(true)`.
        this.mesh.buildOrderedIndices(2, true);

        // Uncomment the following code in a dev build of Phaser to see debug data.
        // The `drawElements` command runs with the second parameter 6,
        // showing how many vertices it used.
        // If you change the optimization level to 0, this will change to 12,
        // showing that it's using more vertices because it doesn't care how they're connected.
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
