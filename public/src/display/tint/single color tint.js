var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
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

    var image = this.add.image(0, 0, 'face');

    image.color.setTint(0xff00ff);

}
