var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var marker;
var atlasFrame;
var singleImage;

function preload() {

    this.load.image('marker', 'assets/sprites/longarrow.png');

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.atlas('atlas', 'assets/atlas/megasetHD-0.png', 'assets/atlas/megasetHD-0.json');

}

function create() {

    //  Marker is 32px high
    marker = this.add.image(0, 300-16, 'marker');

    atlasFrame = this.add.image(100, 300, 'atlas', 'atari800');
    singleImage = this.add.image(400, 300, 'atari');

    //  Sprites are top-aligned on the horizontal line

    // atlasFrame.anchorY = 0;
    // singleImage.anchorY = 0;

    //  Sprites are centered on the horizontal line

    atlasFrame.anchorY = 0.5;
    singleImage.anchorY = 0.5;

    //  Sprites are bottom-aligned on the horizontal line

    // atlasFrame.anchorY = 1;
    // singleImage.anchorY = 1;

}
