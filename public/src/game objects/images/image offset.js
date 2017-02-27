var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var image1;
var image2;
var image3;

function preload() {

    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    this.load.image('bunny', 'assets/sprites/bunny.png');
    this.load.image('tetris', 'assets/sprites/tetrisblock1.png');

}

function create() {

    image1 = this.add.image(800, 200, 'eye');
    // image2 = this.add.image(180, 150, 'tetris');
    // image3 = this.add.image(400, 300, 'bunny');

    console.log(image1);
    console.log(image1.bounds);
    console.log(image1.bounds.offsetX);
    console.log(image1.bounds.offsetY);

}
