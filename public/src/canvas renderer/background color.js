var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    backgroundColor: '#ff0000',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('logo', 'assets/sprites/phaser2.png');

    console.log(this.game.config.backgroundColor);
    console.log(this.game.config.backgroundColor.rgba);

}

function create() {

    var image = this.add.image(0, 0, 'logo');

}
