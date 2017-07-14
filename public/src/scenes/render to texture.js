
var backgroundSceneConfig = {
    key: 'background',
    create: createBackground,
    files: [
        { type: 'image', key: 'face', url: 'assets/pics/bw-face.png' }
    ]
};

var modalSceneConfig = {
    key: 'modal',
    renderToTexture: true,
    x: 64,
    y: 64,
    width: 320,
    height: 240,
    create: createModal,
    files: [
        { type: 'image', key: 'sonic', url: 'assets/sprites/sonic_havok_sanity.png' }
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

function createBackground {

    this.add.image(0, 0, 'face');

}

function createModal {

    this.add.image(0, 0, 'sonic');

}
