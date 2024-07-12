const text = `
the end is never | the end is never | the end is never A 
the end is never | the end is never | the end is never B
the end is never | the end is never | the end is never C
the end is never | the end is never | the end is never D`

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.bitmapFont('shortStack', 'assets/fonts/bitmap/shortStack.png', 'assets/fonts/bitmap/shortStack.xml');
    }

    create ()
    {
        this.add.bitmapText(0, 200, 'shortStack', text, 16).setMaxWidth(400);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);