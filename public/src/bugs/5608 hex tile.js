class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/iso/tilesets/hex-tiles.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/hex/10x10-test.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        const tileset = map.addTilesetImage('hex-tiles', 'tiles');

        const layer = map.createLayer('Tile Layer 1', tileset);

        // layer.setScale(2.8, 1.4);

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

        const cols = [
            0xff0000,
            0x00ff00,
            0x0000ff,
            0xff00ff,
            0xffff00,
            0x00ffff
        ];

        let c = 0;

        this.input.on('pointerdown', pointer => {

            const tile = layer.getTileAtWorldXY(pointer.worldX, pointer.worldY);

            if (tile)
            {
                tile.tint = cols[c];

                c++;

                if (c === cols.length)
                {
                    c = 0;
                }
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
    backgroundColor: '#000000',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
