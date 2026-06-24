class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('grid', 'assets/pics/uv-grid.jpg');
    }

    create ()
    {
        // Don't flip vertical texture coordinates.
        // In this case, it looks wrong, because the texture coordinates assume 0 is the bottom.
        this.add.mesh2d(200, 300, 'grid',
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
            false
        ).buildOrderedIndices(2, true).setScale(180);

        // Flip vertical texture coordinates.
        // This looks correct with this set of texture coordinates.
        // Your mesh source is the final arbiter.
        this.add.mesh2d(600, 300, 'grid',
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
        ).buildOrderedIndices(2, true).setScale(180);
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
