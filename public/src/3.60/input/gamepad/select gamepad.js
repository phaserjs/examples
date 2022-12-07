class Example extends Phaser.Scene
{
    gamepad;
    sprite;

    preload ()
    {
        this.load.image('sky', 'assets/skies/lightblue.png');
        this.load.image('elephant', 'assets/sprites/elephant.png');
    }

    create ()
    {
        this.add.image(0, 0, 'sky').setOrigin(0);

        const text = this.add.text(10, 10, 'Press a button on the Gamepad to use', { font: '16px Courier', fill: '#00ff00' });

        this.input.gamepad.once('down', function (pad, button, index)
        {

            text.setText(`Playing with ${pad.id}`);

            this.gamepad = pad;

            this.sprite = this.add.image(400, 300, 'elephant');

        }, this);
    }

    update ()
    {
        if (this.gamepad)
        {
            if (this.gamepad.left)
            {
                this.sprite.x -= 4;
                this.sprite.flipX = false;
            }
            else if (this.gamepad.right)
            {
                this.sprite.x += 4;
                this.sprite.flipX = true;
            }

            if (this.gamepad.up)
            {
                this.sprite.y -= 4;
            }
            else if (this.gamepad.down)
            {
                this.sprite.y += 4;
            }
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    input: {
        gamepad: true
    },
    scene: Example
};

const game = new Phaser.Game(config);
