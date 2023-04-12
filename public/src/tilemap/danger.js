class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/dangerous-kiss-x2.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/dangerous-kiss.json');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map' });

        // The map was created with 8x8 tiles, but we want to load it with a 2x high resolution tileset
        map.setBaseTileSize(16, 16);

        const tileset = map.addTilesetImage('DangerousKiss_bank.png', 'tiles', 16, 16);

        const layer = map.createLayer('ShoeBox Tile Grab', tileset, 0, 0);

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.04,
            drag: 0.0005,
            maxSpeed: 0.7
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.cameras.main.setBounds(0, 0, layer.width, layer.height);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
