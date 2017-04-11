var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    //  Define the animations first
    this.anims.create('ruby', { frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: -1 });
    this.anims.create('square', { frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });

    //  The Sprite config

    var config = {
        key: 'gems',
        x: { randInt: [ 0, 800 ] },
        y: { randInt: [ 0, 600 ] },
        scale: { randFloat: [ 0.5, 2 ] },
        anims: [ 'ruby', 'square' ]
    };

    //  Make 32 sprites using the config above
    for (var i = 0; i < 32; i++)
    {
        this.make.sprite(config);
    }
}
