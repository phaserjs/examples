class Example extends Phaser.Scene
{
    highlight1;
    keySpace;
    key5;
    keyA;

    preload ()
    {
        this.load.image('keyboard', 'assets/input/keyboard-opreem.png');
        this.load.image('highlight', 'assets/input/key1.png');
    }

    create ()
    {
        this.drawKeyboard();

        //  Create a Key object we can poll directly.

        //  This is especially useful if you need to poll the key in a tight loop, such as for player controls.

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.key5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);

        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update ()
    {

        if (this.keyA.isDown)
        {
            console.log('A');
        }

        if (this.key5.isDown)
        {
            console.log('5');
        }

        if (this.keySpace.isDown)
        {
            console.log('spacebar');
        }

    }

    drawKeyboard ()
    {
        this.add.image(0, 0, 'keyboard').setOrigin(0);

        this.highlight1 = this.add.image(108, 112, 'highlight').setOrigin(0);

        /*
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
        */

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    scene: Example
};

const game = new Phaser.Game(config);
