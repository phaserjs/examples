var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    var playerEvent = new Phaser.Event('SHOOT');

    var _this = this;

    this.on('SHOOT', function (event) {

        _this.events.delete('SHOOT');

    });

    this.events.dispatch(playerEvent);
}
