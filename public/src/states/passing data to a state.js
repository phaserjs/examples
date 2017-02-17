
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

    var stateManager = this.state;

    //  click thing
    window.addEventListener('keydown', function keyDown (event) {

        if (event.which === 32)
        {
            //  Start the Modal State, passing in the object containing x/y coords
            stateManager.start('modal', { x: 200, y: 100 });

            window.removeEventListener('keydown', keyDown);
        }

    });
}

function createModal (data)
{
    console.log('createModal');
    console.dir(data);

    this.add.image(data.x, data.y, 'logo');
}
