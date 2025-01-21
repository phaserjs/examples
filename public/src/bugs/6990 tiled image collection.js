class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/dangerous-kiss-x2.png');
        this.load.tilemapTiledJSON('map2', 'assets/tilemaps/maps/dangerous-kiss.json');

        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/image-collection.json');
        this.load.image('advanced_wars_tank', 'assets/sprites/advanced_wars_tank.png');
        this.load.image('alienbusters', 'assets/sprites/alienbusters.png');
        this.load.image('aqua_ball', 'assets/sprites/aqua_ball.png');
        this.load.image('arrow', 'assets/sprites/arrow.png');
        this.load.image('car90', 'assets/sprites/car90.png');
        this.load.image('car-yellow', 'assets/sprites/car-yellow.png');
        this.load.image('columns-red', 'assets/sprites/columns-red.png');
    }

    create ()
    {
        // this.create2(); return;
        const map = this.make.tilemap({ key: 'map' });

        // The map was created with 8x8 tiles, but we want to load it with a 2x high resolution tileset
        map.setBaseTileSize(8, 8);

        const tilesetCollections = [];

        map.imageCollections.forEach((collection) =>
        {
            collection.images.forEach((img) =>
            {
                let tmpname = img.image;
                tmpname = tmpname.replace('../../sprites/', '').replace('.png', '');

                const tileset = map.addTilesetImage(img.image, tmpname);
                tilesetCollections.push(tileset);
            });
        })

        const layer = map.createLayer('MapLayer', tilesetCollections, 0, 0);

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

        const debugWindow = this.add.graphics();
        map.renderDebug(debugWindow);
    }

    create2 ()
    {
        const map = this.make.tilemap({ key: 'map2' });

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
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
