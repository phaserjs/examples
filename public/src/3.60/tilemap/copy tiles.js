class Example extends Phaser.Scene
{
    map;
    destinationMarker;
    sourceMarker;
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

        // Graphic to show the "source" of the copy operation
        this.sourceMarker = this.add.graphics({ lineStyle: { width: 5, color: 0xffffff, alpha: 1 } });
        this.sourceMarker.strokeRect(0, 0, 6 * this.map.tileWidth, 6 * this.map.tileHeight);

        // Graphic to show the "destination" of the copy operation
        this.destinationMarker = this.add.graphics({ lineStyle: { width: 5, color: 0x000000, alpha: 1 } });
        this.destinationMarker.strokeRect(0, 0, 6 * this.map.tileWidth, 6 * this.map.tileHeight);
        this.destinationMarker.setPosition(this.map.tileWidth * 5, this.map.tileHeight * 10);

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

        const help = this.add.text(16, 16, 'Left-click to copy the tiles in the\nwhite rectangle to the black rectangle.', {
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

        const sourceTileX = this.map.worldToTileX(worldPoint.x);
        const sourceTileY = this.map.worldToTileY(worldPoint.y);
        const destinationTileX = this.map.worldToTileX(this.destinationMarker.x);
        const destinationTileY = this.map.worldToTileY(this.destinationMarker.y);

        // Snap to tile coordinates, but in world space
        this.sourceMarker.x = this.map.tileToWorldX(sourceTileX);
        this.sourceMarker.y = this.map.tileToWorldY(sourceTileY);

        if (this.input.manager.activePointer.isDown)
        {
            // Copy a 6 x 6 area at (sourceTileX, sourceTileY) to (destinationTileX, destinationTileY)
            this.map.copy(sourceTileX, sourceTileY, 6, 6, destinationTileX, destinationTileY);
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
