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
    //  Create an animation with 5 frames
    this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 5, zeroPad: 4 }), repeat: -1 });

    this.add.sprite(400, 100, 'gems').play('diamond');

    var _anims = this.anims;

    document.addEventListener('mouseup', function () {

        var diamond = _anims.get('diamond');

        var newFrames = _anims.generateFrameNames('gems', { prefix: 'diamond_', start: 6, end: 15, zeroPad: 4 });

        diamond.addFrame(newFrames);

    });

}
