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
var blitter;
var bobs = [];
var gravity = 0.5;
var idx = 1;
var frame = 'veg01';

function preload() {

    this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');

}

function launch() {

    idx++;

    if (idx === 38)
    {
        idx = 1;
    }

    if (idx < 10)
    {
        frame = 'veg0' + idx.toString();
    }
    else
    {
        frame = 'veg' + idx.toString();
    }

    var bob = blitter.create(0, 0, frame);

    bob.data.vx = Math.random() * 10;
    bob.data.vy = Math.random() * 10;
    bob.data.bounce = 0.8 + (Math.random() * 0.3);

    bobs.push(bob);

}

function create() {

    state = this;

    blitter = this.add.blitter(0, 0, 'atlas');

    for (var i = 0; i < 50; ++i)
    {
        launch();
    }

}

function update() {

    if (add)
    {
        for (var i = 0; i < 250; ++i)
        {
            launch();

            if (blitter.children.length === 10000)
            {
                //  Create a new blitter object, as they can only hold 10k bobs each
                console.log('Created new Blitter');
                blitter = this.add.blitter(0, 0, 'atlas');
            }
        }
    }

    bobs.forEach(function(bob) {

        bob.data.vy += gravity;

        bob.y += bob.data.vy;
        bob.x += bob.data.vx;

        if (bob.x > 1024)
        {
            bob.x = 1024;
            bob.data.vx *= -bob.data.bounce;
        }
        else if (bob.x < 0)
        {
            bob.x = 0;
            bob.data.vx *= -bob.data.bounce;
        }

        if (bob.y > 768)
        {
            bob.y = 768;
            bob.data.vy *= -bob.data.bounce;
        }

    });

}

window.onmousedown = function ()
{
    add = true;
};

window.onmouseup = function ()
{
    add = false;

    /*
    idx++;

    if (idx === 38)
    {
        idx = 1;
    }

    if (idx < 10)
    {
        frame = 'veg0' + idx.toString();
    }
    else
    {
        frame = 'veg' + idx.toString();
    }
    */

    console.log(bobs.length);
};
