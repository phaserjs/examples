class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/iso/iso-64x64-outside.png');
        this.load.image('tiles2', 'assets/tilemaps/iso/iso-64x64-building.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/iso/isorpg.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        console.log(map);

        const tileset1 = map.addTilesetImage('iso-64x64-outside', 'tiles');
        const tileset2 = map.addTilesetImage('iso-64x64-building', 'tiles2');

        const layer1 = map.createLayer('Tile Layer 1', [ tileset1, tileset2 ]);
        const layer2 = map.createLayer('Tile Layer 2', [ tileset1, tileset2 ]);
        const layer3 = map.createLayer('Tile Layer 3', [ tileset1, tileset2 ]);
        const layer4 = map.createLayer('Tile Layer 4', [ tileset1, tileset2 ]);
        const layer5 = map.createLayer('Tile Layer 5', [ tileset1, tileset2 ]);

        const cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setZoom(2);

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
