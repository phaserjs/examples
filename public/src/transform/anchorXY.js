var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var atlasFrame;
var singleImage;

function preload() {

    this.load.image('markerH', 'assets/sprites/longarrow.png');
    this.load.image('markerV', 'assets/sprites/longarrow-down.png');

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.atlas('atlas', 'assets/atlas/megasetHD-0.png', 'assets/atlas/megasetHD-0.json');

}

function create() {

    this.add.image(300-16, 0, 'markerV');
    this.add.image(0, 200-16, 'markerH');
    this.add.image(0, 500-16, 'markerH');

    atlasFrame = this.add.image(300, 200, 'atlas', 'atari800');
    singleImage = this.add.image(300, 500, 'atari');

    //  Sprites are centered on the lines

    atlasFrame.anchor = 0.5;
    singleImage.anchor = 0.5;

}
