var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var scene = null;
var add = false;
var blitter;
var bobs = [];
var gravity = 0.5;
var idx = 1;
var frame = 'veg01';
var digits;
var numbers = [];

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

    scene = this;

    numbers.push(this.add.image(0 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(1 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(2 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(3 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(4 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(5 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(6 * 48, 720, 'atlas', '0'));

    blitter = this.add.blitter(0, 0, 'atlas');

    for (var i = 0; i < 10; ++i)
    {
        launch();
    }
    
    updateDigits();

}

function update() {

    if (add)
    {
        for (var i = 0; i < 10; ++i)
        {
            launch();

            if (blitter.children.length === 2000)
            {
                //  Create a new blitter object, as they can only hold 10k bobs each
                blitter = this.add.blitter(0, 0, 'atlas');
            }
        }

        updateDigits();
    }

    for (var index = 0, length = bobs.length; index < length; ++index)
    {
        var bob = bobs[index];
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

        if (bob.y > 690)
        {
            bob.y = 690;
            bob.data.vy *= -bob.data.bounce;
        }
    }

}

function updateDigits ()
{
    var len = Phaser.Utils.String.Pad(bobs.length.toString(), 7, '0', 1);

    numbers[0].frame = scene.textures.getFrame('atlas', len[0]);
    numbers[1].frame = scene.textures.getFrame('atlas', len[1]);
    numbers[2].frame = scene.textures.getFrame('atlas', len[2]);
    numbers[3].frame = scene.textures.getFrame('atlas', len[3]);
    numbers[4].frame = scene.textures.getFrame('atlas', len[4]);
    numbers[5].frame = scene.textures.getFrame('atlas', len[5]);
    numbers[6].frame = scene.textures.getFrame('atlas', len[6]);
}

window.onmousedown = function ()
{
    add = true;
};

window.onmouseup = function ()
{
    add = false;
};
