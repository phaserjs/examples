var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
}

function create ()
{
    layer = this.add.layer();

    //  Create some Sprites via the Layer.
    //  They are all created at 0x0
    layer.createMultiple(50, 'diamonds', 0, { x: 32, y: 32, stepX: 14 });

    layer.setAlpha(0, 1 / 50);
}
