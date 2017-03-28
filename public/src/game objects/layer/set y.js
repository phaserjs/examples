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

    //  Now set the X position on them all to be 100 + 64px spacing

    layer.setY(100, 64);

    //  And the X position (so we can see them in this example)
    layer.setX(100);
}
