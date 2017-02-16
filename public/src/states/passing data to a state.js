
var mainStateConfig = {
    key: 'background',
    active: true,
    create: createBackground,
    files: [
        { type: 'image', key: 'face', url: 'assets/pics/bw-face.png' }
    ]
};

var modalStateConfig = {
    key: 'modal',
    active: true,
    renderToTexture: true,
    width: 320,
    height: 200,
    init: initModal,
    create: createModal,
    files: [
        { type: 'image', key: 'logo', url: 'assets/pics/agent-t-buggin-acf-logo.png' }
    ]
};

var gameConfig = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: [ mainStateConfig, modalStateConfig ]
};

var game = new Phaser.Game(gameConfig);

function createBackground ()
{
    this.add.image(0, 0, 'face');

    //  click thing
}

function initModal (data)
{
    console.log('initModal');
    console.dir(data);
}

function createModal (data)
{
    console.log('createModal');
    console.dir(data);

    this.add.image(0, 0, 'logo');
}
