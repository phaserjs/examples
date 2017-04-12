var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
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
    var animConfig = {
        key: 'diamond',
        frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }),
        repeat: 3,
        onComplete: animCompleteCallback
    };

    this.anims.create(animConfig);

    var gem = this.add.sprite(400, 300, 'gems');

    //  Animation will repeat 3 times and then invoke the callback
    gem.play('diamond');
}

function animCompleteCallback (sprite, animation)
{
    //  Animation is over, let's fade the sprite out
    TweenMax.to(sprite, 3, {
        alpha: 0
    });
}
