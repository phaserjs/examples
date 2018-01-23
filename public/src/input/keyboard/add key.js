var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update,
        extend: {
            drawKeyboard: drawKeyboard
        }
    }
};

var game = new Phaser.Game(config);

var keyA;
var key5;
var keySpace;

function preload ()
{
    this.load.atlas('keyboard', 'assets/input/keyboard.png', 'assets/input/keyboard.json');
}

function create ()
{
    this.drawKeyboard();

    //  Create a Key object we can poll directly.

    //  This is especially useful if you need to poll the key in a tight loop, such as for player controls.

    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);

    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

}

function drawKeyboard ()
{
    var row = [1,2,3,4,5,6,7,8,9,0,'Minus','Plus','Backspace_Alt'];

    x = 100;
    y = 100;
    spacing = 106;

    for (var i = 0; i < row.length; i++)
    {
        var key = row[i];

        this.add.image(x, y, 'keyboard', key);

        x += spacing;
    }

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