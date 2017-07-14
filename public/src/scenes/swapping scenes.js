
var backgroundSceneConfig = {
    key: 'background',
    create: createBackground,
    files: [
        { type: 'image', key: 'face', url: 'assets/pics/bw-face.png' }
    ]
};

var modalSceneConfig = {
    key: 'modal',
    create: createModal,
    files: [
        { type: 'image', key: 'logo', url: 'assets/pics/monika-krawinkel-amberstar-title.png' }
    ]
};

var gameConfig = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ backgroundSceneConfig, modalSceneConfig ]
};

var game = new Phaser.Game(gameConfig);

function createBackground ()
{
    this.add.image(0, 0, 'face');

    var scene = this.scene;

    window.addEventListener('click', function handler() {

        this.removeEventListener('click', handler);

        scene.swap('modal');

    })
}

function createModal ()
{
    this.add.image(0, 0, 'logo');
}

