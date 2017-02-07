
var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
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

    console.log('State create called');
    console.log(this);

    this.add.image(0, 0, 'face');

}
