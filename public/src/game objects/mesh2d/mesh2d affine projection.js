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
        ).buildOrderedIndices(2, true).setScale(200);
    }

    update (time, delta)
    {
        // Do some basic 3D projection.
        const a = time / 1000;
        const x = Math.cos(a);
        const z = Math.sin(a);

        const v = this.mesh.vertices;

        // Affine projection: textures do not handle perspective.
        // Mesh2D is intended for 2D use only.
        v[0] = -x; v[1] = -1 - z / 4;
        v[4] = -x; v[5] = 1 + z / 4;
        v[8] = x; v[9] = -1 + z / 4;
        v[12] = x; v[13] = 1 - z / 4;
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
