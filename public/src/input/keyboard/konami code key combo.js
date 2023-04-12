class Example extends Phaser.Scene
{
    create ()
    {

        //  37 = LEFT
        //  38 = UP
        //  39 = RIGHT
        //  40 = DOWN

        const combo = this.input.keyboard.createCombo([ 38, 38, 38, 40, 40, 40, 37, 37, 37, 39, 39, 39 ], { resetOnMatch: true });

        this.input.keyboard.on('keycombomatch', event =>
        {

            console.log('Konami Code entered!');

        });

    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
