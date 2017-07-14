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
        onUpdate: animUpdateCallback
    };

    this.anims.create(animConfig);

    var gem = this.add.sprite(400, 300, 'gems');

    //  The onUpdate callback will be invoked for EVERY frame of this animation, as it plays out.
    //  If you need a callback for just a specific animation frame, see the "on frame update callback" example.
    gem.play('diamond');
}

function animUpdateCallback (sprite, animation)
{
    sprite.x += Phaser.Math.Between(-4, 4);
    sprite.y += Phaser.Math.Between(-4, 4);
}
