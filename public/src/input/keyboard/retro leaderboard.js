class InputPanel extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'InputPanel', active: false });

        this.chars = [
            [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ],
            [ 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' ],
            [ 'U', 'V', 'W', 'X', 'Y', 'Z', '.', '-', '<', '>' ]
        ];

        this.cursor = new Phaser.Math.Vector2();

        this.text;
        this.block;

        this.name = '';
    }

    create ()
    {
        let text = this.add.bitmapText(130, 50, 'arcade', 'ABCDEFGHIJ\n\nKLMNOPQRST\n\nUVWXYZ.-');

        text.setLetterSpacing(20);
        text.setInteractive();

        this.add.image(text.x + 430, text.y + 148, 'rub');
        this.add.image(text.x + 482, text.y + 148, 'end');

        this.block = this.add.image(text.x - 10, text.y - 2, 'block').setOrigin(0);

        this.text = text;

        this.input.keyboard.on('keyup_LEFT', this.moveLeft, this);
        this.input.keyboard.on('keyup_RIGHT', this.moveRight, this);
        this.input.keyboard.on('keyup_UP', this.moveUp, this);
        this.input.keyboard.on('keyup_DOWN', this.moveDown, this);
        this.input.keyboard.on('keyup_ENTER', this.pressKey, this);
        this.input.keyboard.on('keyup_SPACE', this.pressKey, this);
        this.input.keyboard.on('keyup', this.anyKey, this);

        text.on('pointermove', this.moveBlock, this);
        text.on('pointerup', this.pressKey, this);
    }

    moveBlock (pointer, x, y)
    {
        let cx = Phaser.Math.Snap.Floor(x, 52, 0, true);
        let cy = Phaser.Math.Snap.Floor(y, 64, 0, true);
        let char = this.chars[cy][cx];

        this.cursor.set(cx, cy);

        this.block.x = this.text.x - 10 + (cx * 52);
        this.block.y = this.text.y - 2 + (cy * 64);
    }

    moveLeft ()
    {
        if (this.cursor.x > 0)
        {
            this.cursor.x--;
            this.block.x -= 52;
        }
        else
        {
            this.cursor.x = 9;
            this.block.x += 52 * 9;
        }
    }

    moveRight ()
    {
        if (this.cursor.x < 9)
        {
            this.cursor.x++;
            this.block.x += 52;
        }
        else
        {
            this.cursor.x = 0;
            this.block.x -= 52 * 9;
        }
    }

    moveUp ()
    {
        if (this.cursor.y > 0)
        {
            this.cursor.y--;
            this.block.y -= 64;
        }
        else
        {
            this.cursor.y = 2;
            this.block.y += 64 * 2;
        }
    }

    moveDown ()
    {
        if (this.cursor.y < 2)
        {
            this.cursor.y++;
            this.block.y += 64;
        }
        else
        {
            this.cursor.y = 0;
            this.block.y -= 64 * 2;
        }
    }

    anyKey (event)
    {
        //  Only allow A-Z . and -

        let code = event.keyCode;

        if (code === Phaser.Input.Keyboard.KeyCodes.PERIOD)
        {
            this.cursor.set(6, 2);
            this.pressKey();
        }
        else if (code === Phaser.Input.Keyboard.KeyCodes.MINUS)
        {
            this.cursor.set(7, 2);
            this.pressKey();
        }
        else if (code === Phaser.Input.Keyboard.KeyCodes.BACKSPACE || code === Phaser.Input.Keyboard.KeyCodes.DELETE)
        {
            this.cursor.set(8, 2);
            this.pressKey();
        }
        else if (code >= Phaser.Input.Keyboard.KeyCodes.A && code <= Phaser.Input.Keyboard.KeyCodes.Z)
        {
            code -= 65;

            let y = Math.floor(code / 9);
            let x = code - (y * 9);

            console.log(event.key, '=', x, y);

            this.cursor.set(x, y);
            this.pressKey();
        }
    }

    pressKey ()
    {
        let x = this.cursor.x;
        let y = this.cursor.y;
        let nameLength = this.name.length;

        if (x === 9 && y === 2 && nameLength > 0)
        {
            //  Submit
            this.events.emit('submitName', this.name);
        }
        else if (x === 8 && y === 2 && nameLength > 0)
        {
            //  Rub
            this.name = this.name.substr(0, nameLength - 1);

            this.events.emit('updateName', this.name);
        }
        else if (this.name.length < 3)
        {
            //  Add
            this.name = this.name.concat(this.chars[y][x]);

            this.events.emit('updateName', this.name);
        }
    }
}

class Highscore extends Phaser.Scene {

    constructor ()
    {
        super('Highscore');

        this.playerText;
    }

    preload ()
    {
        this.load.image('block', 'assets/input/block.png');
        this.load.image('rub', 'assets/input/rub.png');
        this.load.image('end', 'assets/input/end.png');

        this.load.bitmapFont('arcade', 'assets/fonts/bitmap/arcade.png', 'assets/fonts/bitmap/arcade.xml');
    }

    create ()
    {
        this.add.bitmapText(100, 260, 'arcade', 'RANK  SCORE   NAME').setTint(0xff00ff);
        this.add.bitmapText(100, 310, 'arcade', '1ST   50000').setTint(0xff0000);

        this.playerText = this.add.bitmapText(580, 310, 'arcade', '').setTint(0xff0000);

        //  Do this, otherwise this Scene will steal all keyboard input
        this.input.keyboard.enabled = false;

        this.scene.launch('InputPanel');

        let panel = this.scene.get('InputPanel');

        //  Listen to events from the Input Panel scene
        panel.events.on('updateName', this.updateName, this);
        panel.events.on('submitName', this.submitName, this);
    }

    submitName ()
    {
        this.scene.stop('InputPanel');

        this.add.bitmapText(100, 360, 'arcade', '2ND   40000    ICE').setTint(0xff8200);
        this.add.bitmapText(100, 410, 'arcade', '3RD   30000    GOS').setTint(0xffff00);
        this.add.bitmapText(100, 460, 'arcade', '4TH   20000    HRE').setTint(0x00ff00);
        this.add.bitmapText(100, 510, 'arcade', '5TH   10000    ETE').setTint(0x00bfff);
    }

    updateName (name)
    {
        this.playerText.setText(name);
    }

}

let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: [ Highscore, InputPanel ]
};

let game = new Phaser.Game(config);
