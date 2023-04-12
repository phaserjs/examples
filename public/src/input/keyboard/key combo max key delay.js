class Example extends Phaser.Scene
{
    create ()
    {

        //  They get 1 second to press the next key in the combo, or it resets

        const combo = this.input.keyboard.createCombo('phaser', { maxKeyDelay: 1000 });

        this.input.keyboard.on('keycombomatch', event =>
        {

            console.log('You typed phaser quickly!');

        });

    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
