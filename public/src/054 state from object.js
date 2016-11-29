
var config = {
    width: 800,
    height: 600,
    renderType: Phaser.CANVAS,
    parent: 'phaser-example',
    state: { preload: preload, create: create }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('einstein', 'assets/pics/bw-face.png');

}

var image;

function create() {

    console.log('State create called');
    console.log(this);

    image = this.add.image(0, 0, 'einstein');

}
