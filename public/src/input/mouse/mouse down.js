var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload () {

    this.load.image('logo', 'assets/sprites/phaser.png');

}

function create() {

    var _this = this;

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {

        console.dir(event);

        _this.add.image(event.x, event.y, 'logo');

    });

}
