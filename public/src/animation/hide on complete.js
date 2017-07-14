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

function preload ()
{
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    var animConfig = {
        key: 'diamond',
        frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }),
        repeat: 3,
        hideOnComplete: true
    };

    this.anims.create(animConfig);

    var gem = this.add.sprite(400, 300, 'gems');

    //  Sprite will have visible = false set when the animation finishes repeating because of 'hideOnComplete' property
    gem.play('diamond');
}
