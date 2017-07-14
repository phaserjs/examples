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
        repeat: -1,
        showOnStart: true
    };

    this.anims.create(animConfig);

    var gem = this.add.sprite(400, 300, 'gems');

    //  Set sprite to visible false
    gem.visible = false;

    //  Sprite will have visible = true set when it starts because of 'showOnStart' property
    gem.play('diamond');
}
