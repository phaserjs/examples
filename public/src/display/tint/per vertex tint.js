var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('face', 'assets/pics/bw-face.png');

}

function create() {

    var image = this.add.image(0, 0, 'face');

    //  Set the tint like this (topLeft, topRight, bottomLeft, bottomRight)
    image.color.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

    //  Or like this:

    // image.color.tintTopLeft = 0xff00ff;
    // image.color.tintTopRight = 0xffff00;
    // image.color.tintBottomLeft = 0x0000ff;
    // image.color.tintBottomRight = 0xff0000;

}
