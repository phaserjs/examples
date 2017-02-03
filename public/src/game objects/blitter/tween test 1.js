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
var digits;
var numbers = [];
var tweens = [];

function preload() {

    this.load.atlas('atlas', 'assets/tests/fruit/veg.png', 'assets/tests/fruit/veg.json');

}

function launch(i) {

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

    var bob = blitter.create(i * 32, 0, frame);

    var tween = TweenMax.to(bob, 2, {
        y: 650,
        delay: Math.random() * 2,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });

    bobs.push(bob);

}

function create() {

    state = this;

    numbers.push(this.add.image(0 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(1 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(2 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(3 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(4 * 48, 720, 'atlas', '0'));
    numbers.push(this.add.image(5 * 48, 720, 'atlas', '0'));

    blitter = this.add.blitter(0, 0, 'atlas');

    for (var i = 0; i < 32; ++i)
    {
        launch(i);
    }
    
    updateDigits();

}

function update() {

    if (add)
    {
        for (var i = 0; i < 32; ++i)
        {
            launch(i);

            if (blitter.children.length === 10000)
            {
                //  Create a new blitter object, as they can only hold 10k bobs each
                blitter = this.add.blitter(0, 0, 'atlas');
            }
        }

        updateDigits();
    }

}

function updateDigits ()
{
    var len = Phaser.Utils.String.Pad(bobs.length.toString(), 6, '0', 1);

    numbers[0].frame = state.textures.getFrame('atlas', len[0]);
    numbers[1].frame = state.textures.getFrame('atlas', len[1]);
    numbers[2].frame = state.textures.getFrame('atlas', len[2]);
    numbers[3].frame = state.textures.getFrame('atlas', len[3]);
    numbers[4].frame = state.textures.getFrame('atlas', len[4]);
    numbers[5].frame = state.textures.getFrame('atlas', len[5]);
}

window.onmousedown = function ()
{
    add = true;
};

window.onmouseup = function ()
{
    add = false;
};
