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

    this.load.image('atari', 'assets/sprites/atari130xe.png');
    this.load.atlas('atlas', 'assets/atlas/megasetHD-0.png', 'assets/atlas/megasetHD-0.json');

}

function create() {

    atlasFrame = this.add.image(0, 0, 'atlas', 'atari800');
    singleImage = this.add.image(300, 0, 'atari');

    atlasFrame.scale = 2;
    singleImage.scale = 2;

    console.log(atlasFrame.transform.worldScaleX, atlasFrame.transform.worldScaleY);

    this.add.image(0, 0, 'atlas', 'atari800');
    this.add.image(300, 0, 'atari');



}
