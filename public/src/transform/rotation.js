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

var atlasFrame;
var singleImage;

function preload() {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.atlas('atlas', 'assets/atlas/megasetHD-0.png', 'assets/atlas/megasetHD-0.json');

}

function create() {

    atlasFrame = this.add.image(100, 100, 'atlas', 'atari800');
    singleImage = this.add.image(100, 300, 'atari');

}

function update() {

    atlasFrame.rotation += 0.01;
    singleImage.rotation += 0.01;

}
