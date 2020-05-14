
var sceneConfig = {
    init: init,
    preload: preload,
    create: create,
    pack: {
        files: [
            { type: 'image', key: 'sonic', url: 'assets/sprites/sonic_havok_sanity.png' }
        ]
    },
    extend: {
        face: null,
        data: {
            score: 0
        }
    }
};

var gameConfig = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: sceneConfig
};

var game = new Phaser.Game(gameConfig);

function init ()
{
    console.log('scene', this); // { face: null }
    console.log('score', this.data.get('score')); // 0
}

function preload ()
{
    this.load.image('face', 'assets/pics/bw-face.png');
}

function create ()
{
    this.face = this.add.image(400, 300, 'face');
    this.add.image(400, 300, 'sonic');
}
