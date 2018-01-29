var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var i = 0;
var y = 100;

function preload ()
{
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    //  Each time a new animation is added to the Animation Manager we'll call this function
    this.anims.on('add', addAnimation.bind(this));

    var _anims = this.anims;

    //  Click to add an animation
    this.input.on('pointerup', function () {

        switch (i)
        {
            case 0:
                _anims.create({ key: 'diamond', frames: _anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });
                break;

            case 1:
                _anims.create({ key: 'prism', frames: _anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: -1 });
                break;

            case 2:
                _anims.create({ key: 'ruby', frames: _anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: -1 });
                break;

            case 3:
                _anims.create({ key: 'square', frames: _anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });
                break;
        }

        i++;

    });
}

function addAnimation (key)
{
    this.add.sprite(400, y, 'gems').play(key);

    y += 100;
}
