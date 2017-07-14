var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var BKey;

function create() {

    //  Global event listener, catches all keys

    var _this = this;

    //  Receives every single key down event, regardless of type

    this.input.keyboard.events.on('KEY_DOWN_EVENT', function (event) {

        console.dir(event);

    });

    //  Hook to a specific key without creating a new Key object (in this case the A key)

    this.input.keyboard.events.on('KEY_DOWN_A', function (event) {

        console.log('Hello from the A Key!');

    });

    //  Fire only once on a specific key up event (in this case the S key)

    this.input.keyboard.events.on('KEY_UP_S', function (event) {

        console.log('Keyboard Events Stopped');

        _this.input.keyboard.stopListeners();

    });

    //  Create a Key object we can poll directly in a tight loop

    BKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

}

function update() {

    if (BKey.isDown)
    {
        console.log('B!');
    }

}