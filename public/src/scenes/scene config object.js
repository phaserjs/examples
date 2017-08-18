
var sceneConfig = {
    renderToTexture: true,
    x: 64,
    y: 64,
    _width: 320,
    _height: 240,
    preload: preload,
    create: create,
    files: [
        { type: 'image', key: 'sonic', url: 'assets/sprites/sonic_havok_sanity.png' }
    ]
};

var gameConfig = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: sceneConfig
};

var game = new Phaser.Game(gameConfig);

function preload ()
{
    this.load.image('face', 'assets/pics/bw-face.png');
}

function create ()
{
    this.add.image(0, 0, 'face');
    this.add.image(0, 0, 'sonic');
}
