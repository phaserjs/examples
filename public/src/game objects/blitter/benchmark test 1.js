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

var state = null;
var add = false;
var sub = 0;
var total = 0;
var random = Math.random;
var blitter;

function preload() {

    this.load.atlas('atlas', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');

}

function create() {

    state = this;
    blitter = this.add.blitter(0, 0, 'atlas', 'chunk');

    for (var i = 0; i < 250; ++i)
    {
        blitter.create(random() * state.game.config.width, random() * state.game.config.height);
        total++;
    }

}

function update() {

    if (add)
    {
        for (var i = 0; i < 250; ++i)
        {
            blitter.create(random() * state.game.config.width, random() * state.game.config.height);
            total++;
        }
    }

}

window.onmousedown = function ()
{
    add = true;
};

window.onmouseup = function ()
{
    add = false;
    console.log(total);
};
