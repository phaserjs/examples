var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
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
    group = this.add.group();

    //  Create some Sprites via the group.
    //  They are all created at 0x0
    group.createMultiple({ key: 'diamonds', frame: [0,1,2,3,4] });

    //  Now set the X position on them all to be 100 + 64px spacing

    group.setX(100, 64);

    //  And the Y position (so we can see them in this example)
    group.setY(100);
}
