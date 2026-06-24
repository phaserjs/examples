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
                0, -1, 0, 0,
                -1, 0.5, 0, 1,
                1, 0.5, 1, 0,
            ],
            [
                0, 1, 2, 0,
            ],
            true
        ).setScale(200);
    }

    update (time, delta)
    {
        const v = this.mesh.vertices;

        const a = time / 1000;

        // Texture coordinates are in the third and fourth positions of four-part vertex definitions.
        // We can move them around at runtime.
        // They exist in the range 0-1.
        // If your texture is power-of-two in size, it may support wrapping,
        // but it's typically best to keep them in the range 0-1.
        v[2] = 0.5 + 0.5 * Math.cos(a);
        v[3] = 0.5 + 0.5 * Math.sin(a);
        v[6] = 0.5 + 0.5 * Math.cos(a + Math.PI * 2 / 3);
        v[7] = 0.5 + 0.5 * Math.sin(a + Math.PI * 2 / 3);
        v[10] = 0.5 + 0.5 * Math.cos(a + Math.PI * 4 / 3);
        v[11] = 0.5 + 0.5 * Math.sin(a + Math.PI * 4 / 3);
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
