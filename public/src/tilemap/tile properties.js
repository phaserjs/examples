class Example extends Phaser.Scene
{
    propertiesText;
    marker;
    map;

    preload ()
    {
        // this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/tile_properties-v12.json');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/tile_properties.json');
        this.load.image('tiles', 'assets/tilemaps/tiles/gridtiles.png');
    }

    create ()
    {
        this.map = this.make.tilemap({ key: 'map' });
        const tileset = this.map.addTilesetImage('tiles');
        const layer = this.map.createLayer('Tile Layer 1', tileset, 0, 0);

        this.marker = this.add.graphics();
        this.marker.lineStyle(3, 0xffffff, 1);
        this.marker.strokeRect(0, 0, this.map.tileWidth, this.map.tileHeight);

        const help = this.add.text(16, 500, 'Click on a tile to view its properties.', {
            font: '20px Arial',
            fill: '#ffffff'
        });
        help.setScrollFactor(0);

        this.propertiesText = this.add.text(16, 540, 'Properties: ', {
            fontSize: '18px',
            fill: '#ffffff'
        });
    }

    update (time, delta)
    {
        const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

        // Rounds down to nearest tile
        const pointerTileX = this.map.worldToTileX(worldPoint.x);
        const pointerTileY = this.map.worldToTileY(worldPoint.y);

        // Snap to tile coordinates, but in world space
        this.marker.x = this.map.tileToWorldX(pointerTileX);
        this.marker.y = this.map.tileToWorldY(pointerTileY);

        if (this.input.manager.activePointer.isDown)
        {
            const tile = this.map.getTileAt(pointerTileX, pointerTileY);

            if (tile)
            {
                // Note: JSON.stringify will convert the object tile properties to a string
                this.propertiesText.setText(`Properties: ${JSON.stringify(tile.properties)}`);
                tile.properties.viewed = true;
            }
        }
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
