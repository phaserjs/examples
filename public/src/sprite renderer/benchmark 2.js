var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var ufo;
var state = null;
var addUfo = false;
var random = Math.random;

function preload() {

    this.load.image('ufo', 'assets/sprites/ufo.png');

}

function create() {

    state = this;

    for (var i = 0; i < 50; ++i)
    {
        state.add.image(random() * state.game.config.width, random() * state.game.config.height, 'ufo');
    }

}

function update() {

    this.transform.positionX++;

    if (addUfo)
    {
        for (var i = 0; i < 50; ++i)
        {
            state.add.image(random() * state.game.config.width, random() * state.game.config.height, 'ufo');
        }
    }

}

window.onmousedown = function ()
{
    addUfo = true;
};

window.onmouseup = function ()
{
    addUfo = false;
    console.log(state.sys.children.length);
};
