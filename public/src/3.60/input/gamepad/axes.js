class Example extends Phaser.Scene
{
    sprite;

    preload ()
    {
        this.load.image('sky', 'assets/skies/lightblue.png');
        this.load.image('elephant', 'assets/sprites/elephant.png');
    }

    create ()
    {
        this.add.image(0, 0, 'sky').setOrigin(0);

        this.sprite = this.add.sprite(400, 300, 'elephant');
    }

    update ()
    {
        if (this.input.gamepad.total === 0)
        {
            return;
        }

        const pad = this.input.gamepad.getPad(0);

        if (pad.axes.length)
        {
            const axisH = pad.axes[0].getValue();
            const axisV = pad.axes[1].getValue();

            this.sprite.x += 4 * axisH;
            this.sprite.y += 4 * axisV;

            this.sprite.flipX = (axisH > 0);
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
