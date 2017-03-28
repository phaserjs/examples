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

    //  Add the images to this layer
    for (var i = 0; i < 100; i++)
    {
        var image = this.add.image(0, 0, 'diamonds', 1);

        layer.add(image);
    }

    layer.gridAlign(10, 10, 32, 32);
}
