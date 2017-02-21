var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var keyA;
var key5;
var keySpace;

function create() {

    //  Create a Key object we can poll directly.

    //  This is especially useful if you need to poll the key in a tight loop, such as for player controls.

    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);

    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

}

function update() {

    if (keyA.isDown)
    {
        console.log('A');
    }

    if (key5.isDown)
    {
        console.log('5');
    }

    if (keySpace.isDown)
    {
        console.log('spacebar');
    }

}