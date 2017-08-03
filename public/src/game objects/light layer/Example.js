var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var game = new Phaser.Game(config);

function preload ()
{
}

function create ()
{
    var lights = this.add.lightLayer(0, 0, 800, 600);
}

function update ()
{
}