class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/kenny_ground_64x64.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/copy-test.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        const tileset = map.addTilesetImage('ground', 'tiles');

        const layer = map.createLayer('Tile Layer 1', tileset);

        this.input.once('pointerdown', pointer => {

// When trying to copy more then half the map tilemap.copy() does not work as expected. It works in one direction but not the other.
// If the map is 5x5 and you want to move columns 2-5 to the left one it works fine. If you want to move columns 1-4 to the right one it just replicates column 1 over and over.
// This happens when you pass the half way point on a map. So on an 11x11 moving tiles 1-5 to over to column 6 works perfectly fine. Moving columns 1-6 over to column 5 is when it starts to mess up.

            //  Map is 12x12

            //  Works
            // map.copy(0, 0, 6, 12, 6, 0);

            map.copy(0, 0, 26, 3, 3, 4);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
