class Example extends Phaser.Scene
{
    sprites = [];

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('sky', 'assets/skies/lightblue.png');
        this.load.image('elephant', 'assets/sprites/elephant.png');
    }

    create ()
    {
        this.add.image(0, 0, 'sky').setOrigin(0);

        let text;

        if (this.input.gamepad.total === 0)
        {
            text = this.add.text(10, 10, 'Press any button on a connected Gamepad', { font: '16px Courier', fill: '#00ff00' });

            this.input.gamepad.once('connected', function (pad)
            {

                console.log('connected', pad.id);

                for (let i = 0; i < this.input.gamepad.total; i++)
                {
                    this.sprites.push(this.add.sprite(Phaser.Math.Between(200, 600), Phaser.Math.Between(100, 500), 'elephant'));
                }

                text.destroy();

            }, this);
        }
        else
        {
            for (let i = 0; i < this.input.gamepad.total; i++)
            {
                this.sprites.push(this.add.sprite(Phaser.Math.Between(200, 600), Phaser.Math.Between(100, 500), 'elephant'));
            }
        }
    }

    update ()
    {
        const pads = this.input.gamepad.gamepads;

        for (let i = 0; i < pads.length; i++)
        {
            const gamepad = pads[i];

            if (!gamepad)
            {
                continue;
            }

            const sprite = this.sprites[i];

            if (gamepad.left)
            {
                sprite.x -= 4;
                sprite.flipX = false;
            }
            else if (gamepad.right)
            {
                sprite.x += 4;
                sprite.flipX = true;
            }

            if (gamepad.up)
            {
                sprite.y -= 4;
            }
            else if (gamepad.down)
            {
                sprite.y += 4;
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
