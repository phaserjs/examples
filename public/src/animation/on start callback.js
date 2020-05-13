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
        repeat: -1
    };

    var anim = this.anims.create(animConfig);

    // This event is dispatched by an Animation instance when it starts playing.
    // It will invoke its handler for *each* sprite.
    anim.on('start', animStartCallback);

    group = this.add.group();

    //  Create 32 sprites
    group.createMultiple({ key: 'gems', frame: 'diamond_0000', repeat: 32 });

    //  Play the same animation on them all
    //  The animStartCallback will be invoked for each of them
    group.playAnimation('diamond');
}

function animStartCallback (animation, animationFrame, sprite)
{
    sprite.x = Phaser.Math.Between(0, 780);
    sprite.y = Phaser.Math.Between(0, 580);
    sprite.setScale(0.5 + Math.random() * 2);
}
