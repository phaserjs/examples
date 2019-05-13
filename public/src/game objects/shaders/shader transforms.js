var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.glsl('marble', 'assets/shaders/marble.glsl.js');
}

function create ()
{
    var shader = this.add.shader('marble', 400, 300, 800, 600);
}
