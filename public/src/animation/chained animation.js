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

function preload ()
{
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: 3 });
    this.anims.create({ key: 'ruby', frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: 8 });
    this.anims.create({ key: 'prism', frames: this.anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: 8 });
    this.anims.create({ key: 'square', frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });

    var gem = this.add.sprite(400, 300, 'gems').setScale(4);

    //  Play the diamond animation (which repeats 3 times)
    gem.play('diamond');

    //  When 'diamond' completes, play the ruby animation
    gem.anims.chain('ruby');

    //  When 'ruby' completes, play the prism animation
    gem.anims.chain('prism');

    //  When 'prism' completes, play the square animation
    gem.anims.chain('square');
}
