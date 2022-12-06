class Example extends Phaser.Scene
{
    map;
    marker;
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

        this.marker = this.add.graphics();
        this.marker.lineStyle(2, 0x000000, 1);
        this.marker.strokeRect(0, 0, 6 * this.map.tileWidth, 6 * this.map.tileHeight);

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

        const help = this.add.text(16, 16, 'Left-click to randomize tiles.', {
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

        const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

        // Rounds down to nearest tile
        const pointerTileX = this.map.worldToTileX(worldPoint.x);
        const pointerTileY = this.map.worldToTileY(worldPoint.y);

        // Snap to tile coordinates, but in world space
        this.marker.x = this.map.tileToWorldX(pointerTileX);
        this.marker.y = this.map.tileToWorldY(pointerTileY);

        if (this.input.manager.activePointer.isDown)
        {
            // Randomize the tiles within an area using the indexes that are there already
            this.map.randomize(pointerTileX, pointerTileY, 6, 6);

            // You can also randomize and specify the array of indexes to sample from:
            // map.randomize(pointerTileX, pointerTileY, 6, 6, [ 30, 38, 46 ]);
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
