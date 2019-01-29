var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 300 } }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/tiles/drawtiles.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/simple-map.json');
    this.load.image('player', 'assets/sprites/phaser-dude.png');
}

function create ()
{

}

function update ()
{

}
