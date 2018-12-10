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
    var marker = this.add.sprite(400, 400, 'gems', 'ruby_0000');

    var animConfig = {
        key: 'diamond',
        frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }),
        repeat: 6,
        onRepeat: animRepeatCallback,
        onRepeatParams: [ marker ]
    };

    this.anims.create(animConfig);

    //  Play the animation.
    //  Each time it repeats it calls on the onRepeat callback,
    //  and passes over the array contents defined in onRepeatParams, after the default parameters
    this.add.sprite(200, 400, 'gems').play('diamond');
}

//  The first two callback arguments are always the sprite on which the animation is playing, and the animation itself.
//  Following this comes whatever you specify in the params array (in this case onRepeatParams)
function animRepeatCallback (sprite, animation, param1)
{
    param1.y -= 32;
}
