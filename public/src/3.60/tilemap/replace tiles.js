class Example extends Phaser.Scene
{
    map;
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/tmw_desert_spacing.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/desert.json');
    }

    create ()
    {
        this.map = this.make.tilemap({ key: 'map' });
        const tiles = this.map.addTilesetImage('Desert', 'tiles');
        const layer = this.map.createLayer('Ground', tiles, 0, 0);

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

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

        const help = this.add.text(16, 16, 'Click a tile to replace all instances with a plant.', {
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

        if (this.input.manager.activePointer.isDown)
        {
            const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);
            const tile = this.map.getTileAtWorldXY(worldPoint.x, worldPoint.y);

            // This will replace all instances of the selected tile with a plant (tile id = 38).
            this.map.replaceByIndex(tile.index, 38);

            // You can also replace within a specific region (tileX, tileY, width, height):
            // map.replaceByIndex(tile.index, 38, 5, 5, 15, 15);
        }

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
