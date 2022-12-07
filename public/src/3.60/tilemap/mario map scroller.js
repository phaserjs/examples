class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.tilemapTiledJSON('map1', 'assets/tilemaps/maps/super-mario.json');
        this.load.image('tiles1', 'assets/tilemaps/tiles/super-mario.png');

        this.load.tilemapTiledJSON('map3', 'assets/tilemaps/maps/super-mario-3.json');
        this.load.image('tiles3', 'assets/tilemaps/tiles/super-mario-3.png');
    }

    create ()
    {
        const map1 = this.make.tilemap({ key: 'map1' });
        const tileset1 = map1.addTilesetImage('SuperMarioBros-World1-1', 'tiles1');
        const layer1 = map1.createLayer('World1', tileset1, 0, 0);

        const map2 = this.add.tilemap('map3');
        const tileset2 = map2.addTilesetImage('SuperMarioBrosMap1-3_bank.png', 'tiles3');
        const layer2 = map2.createLayer('ShoeBox Tile Grab', tileset2, 700, 300);

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            speed: 0.5
        };

        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

        this.cameras.main.setBounds(0, 0, layer2.x + layer2.width + 600, 0);
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
