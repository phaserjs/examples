class Example extends Phaser.Scene
{
    create ()
    {

        //  Here we'll create a simple key combo
        //  When you type in ABCD the event will be triggered on the entry of the final character (D)
        //  An incorrect key press will reset the combo back to the start again

        const combo = this.input.keyboard.createCombo('ABCD');

        this.input.keyboard.on('keycombomatch', event =>
        {

            console.log('Key Combo matched!');

        });

    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
