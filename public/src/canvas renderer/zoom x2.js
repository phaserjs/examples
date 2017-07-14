var config = {
    type: Phaser.CANVAS,
    width: 160,
    height: 144,
    zoom: 4,
    pixelArt: true,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('title', 'assets/tests/zoom/title.png');

}

function create() {

    var image = this.add.image(0, 0, 'title');

}
