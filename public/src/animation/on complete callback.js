var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var gem;

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
        repeat: 2
    };

    this.anims.create(animConfig);

    gem = this.add.sprite(400, 300, 'gems');

    //  Animation will repeat twice and then emit the event
    gem.on('animationcomplete', animComplete, this);

    gem.play('diamond');
}

function animComplete (animation, frame)
{
    //  Animation is over, let's fade the sprite out
    this.tweens.add({
        targets: gem,
        duration: 3000,
        alpha: 0
    });
}
