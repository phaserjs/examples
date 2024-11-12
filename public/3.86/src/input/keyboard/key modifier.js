class Example extends Phaser.Scene
{
    create ()
    {
        this.input.keyboard.on('keydown_A', event =>
        {

            if (event.ctrlKey)
            {
                console.log('A + CTRL');
            }
            else if (event.altKey)
            {
                console.log('A + ALT');
            }
            else if (event.shiftKey)
            {
                console.log('A + Shift');
            }
            else
            {
                console.log('A without modifier');
            }

        });
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
