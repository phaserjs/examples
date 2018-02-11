var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var gamepad;
var sprite;
var config;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/skies/lightblue.png');
    this.load.image('elephant', 'assets/sprites/elephant.png');
}

function create ()
{
    this.add.image(0, 0, 'sky').setOrigin(0);

    sprite = this.add.sprite(400, 300, 'elephant');

    config = Phaser.Input.Gamepad.Configs.SNES_USB;

    this.input.on('GAMEPAD_DOWN_EVENT', function (event) {

        if (!gamepad)
        {
            gamepad = event.gamepad;
        }

        switch (event.button.index)
        {
            case config.B:
                sprite.alpha -= 0.1;
                break;

            case config.A:
                sprite.alpha += 0.1;
                break;
        }

    });
}

function update ()
{
    if (!gamepad)
    {
        return;
    }

    if (gamepad.buttons[config.LEFT].pressed)
    {
        sprite.x -= 4;
        sprite.flipX = false;
    }
    else if (gamepad.buttons[config.RIGHT].pressed)
    {
        sprite.x += 4;
        sprite.flipX = true;
    }

    if (gamepad.buttons[config.UP].pressed)
    {
        sprite.y -= 4;
    }
    else if (gamepad.buttons[config.DOWN].pressed)
    {
        sprite.y += 4;
    }
}
