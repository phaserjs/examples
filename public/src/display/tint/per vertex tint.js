var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('face', 'assets/pics/bw-face.png');
}

function create ()
{
    var image = this.add.image(400, 300, 'face');

    //  Set the tint like this (topLeft, topRight, bottomLeft, bottomRight)
    image.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

    //  Or like this:

    // image.tintTopLeft = 0xff00ff;
    // image.tintTopRight = 0xffff00;
    // image.tintBottomLeft = 0x0000ff;
    // image.tintBottomRight = 0xff0000;
}
