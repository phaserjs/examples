class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/cybernoid.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/cybernoid.json');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map' });

        // The first parameter is the name of the tileset in Tiled and the second parameter is the key
        // of the tileset image used when loading the file in preload.
        const tiles = map.addTilesetImage('cybernoid', 'tiles');

        // You can load a layer from the map using the layer name from Tiled, or by using the layer
        // index (0 in this case).
        const layer = map.createLayer(0, tiles, 0, 0);

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

        const help = this.add.text(16, 16, 'Arrow keys to scroll', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        help.setScrollFactor(0);
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
