var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
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
}

function update() {
    if (addUfo)
    {
        for (var i = 0; i < 100; ++i)
            state.add.image(random() * 1024, random() * 768, 'ufo');
    }
}

window.onmousedown = function ()
{
    addUfo = true;
};

window.onmouseup = function ()
{
    addUfo = false;
};