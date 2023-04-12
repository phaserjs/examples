class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
        this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    }

    create ()
    {
        console.log(this.cache.tilemap.entries);

        // When loading a CSV map, make sure to specify the tileWidth and tileHeight
        const map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
        const tileset = map.addTilesetImage('tiles');
        const layer = map.createLayer(0, tileset, 0, 0); // layer index, tileset, x, y
        layer.skipCull = true;

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
            fill: '#ffffff'
        });

        help.setScrollFactor(0);

        const gui = new dat.GUI();

        const cam = this.cameras.main;

        cam.setBounds(0, 0, 4096, 4096);

        gui.addFolder('Camera');
        gui.add(cam, 'dirty').listen();
        gui.add(cam.midPoint, 'x').listen();
        gui.add(cam.midPoint, 'y').listen();
        gui.add(cam, 'scrollX').listen();
        gui.add(cam, 'scrollY').listen();
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
