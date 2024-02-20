class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('fantasy-tiles', 'assets/tilemaps/tiles/fantasy-tiles.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/create from tiles.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        const tiles = map.addTilesetImage('fantasy-tiles');

        const layer = map.createLayer('Tile Layer 1', tiles);

        //  52 = ? block
        //  49 = chest
        // map.createFromTiles();

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#00000',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
