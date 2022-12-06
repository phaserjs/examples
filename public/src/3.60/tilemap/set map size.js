class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/super-mario.json');
        this.load.image('tiles', 'assets/tilemaps/tiles/super-mario.png');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
        const layer = map.createLayer('World1', tileset, 100, 200);

        // Map size
        layer.width = 400;

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            speed: 0.5
        };

        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
        this.cameras.main.setBounds(0, 0, layer.x + layer.width, 0);
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
