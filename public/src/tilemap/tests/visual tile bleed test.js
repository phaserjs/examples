class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
        this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
        const tileset = map.addTilesetImage('tiles');
        const layer = map.createLayer(0, tileset, 0, 0);

        // Visual test to make sure tiles don't bleed while scrolling at certain speeds
    }

    update (time, delta)
    {
        this.cameras.main.scrollX = (200 + Math.cos(time / 1000) * 200);
        this.cameras.main.scrollY = (500 + Math.sin(time / 1000) * 500);
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
