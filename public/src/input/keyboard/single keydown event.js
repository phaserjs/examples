class Example extends Phaser.Scene
{
    create ()
    {

        //  Listen for a specific key (in this case the A key.)
        //  This works without creating a new Key object, and is especially useful for 'once' calls.
        //  For game input (i.e. player controls) you should use Key objects instead.

        this.input.keyboard.on('keydown-A', event =>
        {
            console.log('Hello from the A Key!');
        });

        this.input.keyboard.on(Phaser.Events, event =>
        {
            console.log(event.key);
        });

        this.input.keyboard.on('keydown-SPACE', event =>
        {
            console.log('Hello from the Space Bar!');
        });

        this.input.keyboard.addCapture('SPACE');
        this.add.text(10, 10, 'Press any button and see the console', {fontSize: '20px'});
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
