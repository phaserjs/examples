class Example extends Phaser.Scene
{
    create ()
    {
        const title = this.add.text(100, 200, 'Static Text Object', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });

        this.input.once('pointerdown', () =>
        {

            //  You can set the text proprety directly like this:
            title.text = 'Hello world';

            //  Or use the setText method if you need method chaining:
            title.setText('Hello world');

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
