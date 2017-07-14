var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
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
    this.load.atlas('atlas', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');

}

function create() {

    atlasFrame = this.add.image(300, 100, 'atlas', 'atari800xl');
    singleImage = this.add.image(300, 300, 'atari');

    atlasFrame.anchorX = 0.5;
    singleImage.anchorX = 0.5;

}

function update() {

    atlasFrame.rotation += 0.01;
    singleImage.rotation += 0.01;

}
