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

    this.load.image('marker', 'assets/sprites/longarrow-down.png');

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.atlas('atlas', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');

}

function create() {

    //  Marker is 32px wide
    marker = this.add.image(300-16, 0, 'marker');

    atlasFrame = this.add.image(300, 200, 'atlas', 'atari800');
    singleImage = this.add.image(300, 400, 'atari');

    //  Sprites are left-aligned on the vertical line

    // atlasFrame.anchorX = 0;
    // singleImage.anchorX = 0;

    //  Sprites are centered on the vertical line

    atlasFrame.anchorX = 0.5;
    singleImage.anchorX = 0.5;

    //  Sprites are right-aligned on the vertical line

    // atlasFrame.anchorX = 1;
    // singleImage.anchorX = 1;

}
