var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        render: render
    }
};

var game = new Phaser.Game(config);

var image;

function preload() {

    this.load.image('scroll', 'assets/pics/backscroll.png');

}

function create() {

    image = this.add.image(0, 0, 'scroll');

}
