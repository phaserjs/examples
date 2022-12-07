class Example extends Phaser.Scene
{
    map;
    objectLayer;
    groundLayer;

    preload ()
    {
        // Credits! Michele "Buch" Bucelli (tilset artist) & Abram Connelly (tileset sponser)
        // https://opengameart.org/content/top-down-dungeon-tileset
        this.load.image('tiles', 'assets/tilemaps/tiles/buch-dungeon-tileset.png');
    }

    create ()
    {
        // Creating a blank tilemap with the specified dimensions
        this.map = this.make.tilemap({ tileWidth: 16, tileHeight: 16, width: 23, height: 17 });

        const tiles = this.map.addTilesetImage('tiles');

        this.groundLayer = this.map.createBlankLayer('Ground Layer', tiles);
        this.objectLayer = this.map.createBlankLayer('Object Layer', tiles);
        this.groundLayer.setScale(2);
        this.objectLayer.setScale(2);
        this.cameras.main.setScroll(-27, -27);

        // Walls & corners of the room
        this.groundLayer.fill(39, 0, 0, this.map.width, 1);
        this.groundLayer.fill(1, 0, this.map.height - 1, this.map.width, 1);
        this.groundLayer.fill(21, 0, 0, 1, this.map.height);
        this.groundLayer.fill(19, this.map.width - 1, 0, 1, this.map.height);
        this.groundLayer.putTileAt(3, 0, 0);
        this.groundLayer.putTileAt(4, this.map.width - 1, 0);
        this.groundLayer.putTileAt(23, this.map.width - 1, this.map.height - 1);
        this.groundLayer.putTileAt(22, 0, this.map.height - 1);

        this.randomizeRoom(); // Initial randomization
        this.input.on('pointerdown', this.randomizeRoom);

        const help = this.add.text(16, 16, 'Click to re-randomize.', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#ffffff',
            fill: '#000000'
        });
        help.setScrollFactor(0);
    }

    randomizeRoom ()
    {
        // Fill the floor with random ground tiles
        this.groundLayer.weightedRandomize([
            { index: 6, weight: 4 }, // Regular floor tile (4x more likely)
            { index: 7, weight: 1 }, // Tile variation with 1 rock
            { index: 8, weight: 1 }, // Tile variation with 1 rock
            { index: 26, weight: 1 } // Tile variation with 1 rock
        ],
        1,// - The left most tile index (in tile coordinates) to use as the origin of the area.
        1,// - The top most tile index (in tile coordinates) to use as the origin of the area. 
        this.map.width - 2, // - How many tiles wide from the `tileX` index the area will be.
        this.map.height - 2 // - How many tiles tall from the `tileY` index the area will be.
        );

        // Fill the floor of the room with random, weighted tiles
        this.objectLayer.weightedRandomize([
            { index: -1, weight: 50 }, // Place an empty tile most of the tile
            { index: 13, weight: 3 }, // Empty pot
            { index: 32, weight: 2 }, // Full pot
            { index: 127, weight: 1 }, // Open crate
            { index: 108, weight: 1 }, // Empty crate
            { index: 109, weight: 2 }, // Open barrel
            { index: 110, weight: 2 }, // Empty barrel
            { index: 166, weight: 0.25 }, // Chest
            { index: 167, weight: 0.25 } // Trap door
        ], 1, 1, this.map.width - 2, this.map.height - 2);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
