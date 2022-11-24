class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/iso/tilesets/hex-tiles.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/iso/hex-test.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        const tileset = map.addTilesetImage('tileset', 'tiles');

        const layer = map.createLayer('Layer 1', tileset);

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.02,
            drag: 0.0005,
            maxSpeed: 0.7
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.input.on('pointerdown', pointer => {

            const x = pointer.worldX;
            const y = pointer.worldY;

            const tileXY = layer.worldToTileXY(x, y, true);
            // const tileX = layer.worldToTileX(x, true);
            // const tileY = layer.worldToTileX(y, true);
            // console.log(tileXY, tileX, tileY);
            console.log(tileXY);

            const tile = layer.getTileAtWorldXY(pointer.worldX, pointer.worldY);

            if (tile)
            {
                tile.tint = 0xff0000;
            }

        });
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
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
