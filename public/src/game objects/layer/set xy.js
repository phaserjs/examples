var config = {
    type: Phaser.AUTO,
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
    layer.createMultiple(1, 'diamonds', [0,1,2,3,4]);

    //  Now set the XY position on them all to be 100x100 with 64px spacing between each sprite

    layer.setXY(100, 100, 64, 64);
}
