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

    };

    this.anims.create(animConfig);

    var gem = this.add.sprite(400, 300, 'gems');

    // This event will be dispatched when the 'diamond' animation changes frame, based on the animation frame rate and other factors like timeScale and delay, for all Game Objects with that animation.
    gem.on('animationupdate-diamond', animUpdateCallback);

    gem.play('diamond');
}

function animUpdateCallback (animation, animationFrame, sprite)
{
    sprite.x += Phaser.Math.Between(-4, 4);
    sprite.y += Phaser.Math.Between(-4, 4);
}
