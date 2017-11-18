let config = {
    width: 800,
    height: 600,
    resolution: 1,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update,
        extend: {
            minimap: null
        }
    }
};

let t = 0;
let game = new Phaser.Game(config);
let width = 40;
let height = 38;

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/tiles/drawtiles.png');
}

function create ()
{
    // Build a random level as a 2D array
    const level = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            const tileIndex = Phaser.Math.RND.integerInRange(0, 6);
            row.push(tileIndex);
        }
        level.push(row);
    }

    var map = this.make.tilemap({ data: level, tileWidth: 32, tileHeight: 32 });
    var tileset = map.addTilesetImage('tiles');
    var layer = map.createStaticLayer(0, tileset, 0, 0);

    this.cameras.main.setBounds(0, 0, layer.width, layer.height);
    this.minimap = this.cameras.add(200, 10, 100, 100).setZoom(0.2);
    this.minimap.setBackgroundColor('#ffff00');
}

function update ()
{
    this.minimap.scrollX = width * 32 / 2 + Math.cos(t) * 300;
    this.minimap.scrollY = height * 32 / 2 + Math.sin(t) * 300;
    t += 0.025;
}
