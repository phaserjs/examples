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
    console.log(this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }));

    //  Create an animation with 5 frames
    this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });

    this.add.sprite(400, 100, 'gems').play('diamond');

    this.input.once('pointerup', function () {

        var diamond = this.anims.get('diamond');

        var newFrames = this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 });

        diamond.addFrame(newFrames);

    }, this);
}
