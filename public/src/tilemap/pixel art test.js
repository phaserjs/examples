class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.tilemapTiledJSON('map1', 'assets/tilemaps/maps/super-mario.json');
        this.load.image('tiles1', 'assets/tilemaps/tiles/super-mario.png');
    }

    create ()
    {
        const map1 = this.make.tilemap({ key: 'map1' });
        const tileset1 = map1.addTilesetImage('SuperMarioBros-World1-1', 'tiles1');
        const layer1 = map1.createLayer('World1', tileset1, 0, 0).setScale(2.5);

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

        this.cameras.main.setBounds(0, 0, layer1.x + layer1.width, layer1.height * 3);
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
    pixelArt: false,
    scene: Example
};

const game = new Phaser.Game(config);
