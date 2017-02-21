var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var BKey;

function create() {

    //  Global event listener, catches all keys

    var _this = this;

    this.game.input.keyboard.events.on('KEY_DOWN_EVENT', function (event) {

        console.dir(event);

        if (event.data.key === 's')
        {
            console.log('stopped');
            _this.game.input.keyboard.stopListeners();
        }

    });

    //  Hook to a specific key without creating a new Key object

    // this.game.input.keyboard.events.on('KEY_DOWN_EVENT', function (event) {
    //     console.dir(event);
    // });

    //  Create a Key object we can poll directly in a tight loop

    BKey = this.game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

}

function update() {

    if (BKey.isDown)
    {
        console.log('B!');
    }

}