class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/platformer_tiles.png');
    }

    create ()
    {
        const map = this.make.tilemap({ tileWidth: 16, tileHeight: 16, width: 25, height: 20 });

        const tiles = map.addTilesetImage('tiles');

        const layer = map.createBlankLayer('layer1', tiles);

        map.putTileAt(77, 1, 1);
        map.putTileAt(77, 2, 1, true, layer);
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
