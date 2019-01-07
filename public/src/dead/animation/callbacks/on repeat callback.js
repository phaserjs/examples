var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var marker;

function preload ()
{
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    var animConfig = {
        key: 'diamond',
        frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }),
        repeat: 6,
        onRepeat: animRepeatCallback
    };

    this.anims.create(animConfig);

    marker = this.add.sprite(400, 400, 'gems', 'ruby_0000');

    this.add.sprite(200, 400, 'gems').play('diamond');
}

function animRepeatCallback (sprite, animation)
{
    //  Each time to sprite animation repeats we'll move this sprite up 32px
    marker.y -= 32;
}
