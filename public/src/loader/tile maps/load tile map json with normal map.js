class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.setPath('assets/tilemaps/');

        this.load.image('tiles', [ 'tiles/cybernoid.png', 'tiles/cybernoid_n.png' ]);

        this.load.tilemapTiledJSON('map', 'maps/cybernoid.json');
    }

    create ()
    {
        const light = this.lights.addLight(0, 0, 300);

        this.lights.enable().setAmbientColor(0x888888);

        this.input.on('pointermove', function (pointer)
        {

            light.x = this.cameras.main.scrollX + pointer.x;
            light.y = this.cameras.main.scrollY + pointer.y;

        });

        const map = this.make.tilemap({ key: 'map' });

        const tiles = map.addTilesetImage('cybernoid', 'tiles');

        const layer = map.createLayer(0, tiles, 0, 0);

        layer.setPipeline('Light2D');

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        };

        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
