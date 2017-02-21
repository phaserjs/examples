var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    //  Receives every single key down event, regardless of origin or key

    this.input.keyboard.events.on('KEY_DOWN_EVENT', function (event) {

        console.dir(event);

    });

}
