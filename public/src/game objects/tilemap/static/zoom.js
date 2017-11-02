let config = {
    width: 800,
    height: 600,
    resolution: 1,
    type: Phaser.AUTO,
    parent: 'phaser-example',
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

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/tiles/drawtiles.png');
}
let width = 40, height = 38;

function create ()
{
    let map = [];
    for (let i = 0; i < width * height; i++) {
        map.push(Math.floor( Math.random() * 7 ));
    }

    this.add.staticTilemap(map, 0, 0, 32, 32, width, height, 0, 'tiles');

    this.cameras.main.setBounds(0, 0, 32 * width, 32 * height);
    this.minimap = this.cameras.add(200, 10, 100, 100).setZoom(0.2);
    this.minimap.setBackgroundColor('#ffff00');
}

function update()
{
    this.minimap.scrollX = width * 32 / 2 + Math.cos(t) * 300;
    this.minimap.scrollY = height * 32 / 2 + Math.sin(t) * 300;
    t += 0.025;
}