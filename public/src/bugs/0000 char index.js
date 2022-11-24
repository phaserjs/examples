class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.bitmapFont('shortStack', 'assets/fonts/bitmap/shortStack.png', 'assets/fonts/bitmap/shortStack.xml');
    }

    create ()
    {
        const str = `Daisy was a little cow\nWho hid inside all day\nShe didn't like the rain and mud\nThat made her white coat gray`;

        const b = this.add.bitmapText(0, 0, 'shortStack', str);

        console.log(b.getTextBounds());
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Demo
};

const game = new Phaser.Game(config);
