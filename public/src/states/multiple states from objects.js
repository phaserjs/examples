
var backgroundStateConfig = {
    key: 'background',
    active: true,
    create: createBackground,
    render: renderBackground,
    files: [
        { type: 'image', key: 'face', url: 'assets/pics/bw-face.png' }
    ]
};

var modalStateConfig = {
    key: 'modal',
    active: true,
    x: 64,
    y: 64,
    width: 320,
    height: 200,
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
    state: [ backgroundStateConfig, modalStateConfig ]
};

var game = new Phaser.Game(gameConfig);

function createBackground ()
{
    this.add.image(0, 100, 'face');
}

function createModal ()
{
    this.add.image(0, 0, 'logo');
}

var r = 0;

function renderBackground (ctx)
{
    ctx.fillStyle = 'rgb(' + r + ', 0, 0)';
    ctx.fillRect(0, 0, 32, 32);

    r += 2;

    if (r >= 256)
    {
        r = 0;
    }
}
