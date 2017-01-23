var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var image1;
var image2;

function preload() {

    this.load.atlas('atlas', 'assets/atlas/megasetHD-0.png', 'assets/atlas/megasetHD-0.json');

}

function create() {

    image1 = this.add.image(0, 0, 'atlas', 'atari400');
    image2 = this.add.image(120, 300, 'atlas', 'hotdog');

    image2.anchor = 0.5;

    //  Set the tint like this (topLeft, topRight, bottomLeft, bottomRight)

    image1.color.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

    image2.color.setTint(0x0000ff, 0xff0000, 0xff00ff, 0xffff00);

}

function update() {

    image2.rotation += 0.01;

}