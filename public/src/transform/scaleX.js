var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var atlasFrame;
var singleImage;

function preload() {

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.atlas('atlas', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');

}

function create() {

    atlasFrame = this.add.image(0, 0, 'atlas', 'dragonwiz');
    singleImage = this.add.image(0, 200, 'atari');

    atlasFrame.scaleX = 2;
    singleImage.scaleX = 2;

}
