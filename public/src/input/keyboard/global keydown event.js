class Example extends Phaser.Scene
{
    create ()
    {

        //  Receives every single key down event, regardless of origin or key

        this.input.keyboard.on('keydown', event =>
        {

            console.dir(event);

        });

    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
