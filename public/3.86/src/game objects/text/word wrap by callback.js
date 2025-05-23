class Example extends Phaser.Scene
{
    create ()
    {
        this.make.text({
            x: 400,
            y: 300,
            text: 'The sky above the port was the color of television, tuned to a dead channel.',
            origin: 0.5,
            style: {
                font: 'bold 30px Arial',
                fill: 'white',
                wordWrap: { callback: this.wordWrap, scope: this }
            }
        });
    }

    wordWrap (text, textObject)
    {
        // First parameter will be the string that needs to be wrapped
        // Second parameter will be the Text game object that is being wrapped currently

        // This wrap just puts each word on a separate line, but you could inject your own
        // language-specific logic here.
        const words = text.split(' ');

        // You can return either an array of individual lines or a string with line breaks (e.g. \n) in
        // the correct place.
        return words;
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#0072bc',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
