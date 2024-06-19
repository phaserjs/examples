class Example extends Phaser.Scene
{

    preload ()
    {
        this.load.bitmapFont('title', 'https://raw.githubusercontent.com/monteiz/phaser-3-example/main/title.png', 'https://raw.githubusercontent.com/monteiz/phaser-3-example/main/title.fnt');
        this.load.bitmapFont('shortStack', 'assets/fonts/bitmap/shortStack.png', 'assets/fonts/bitmap/shortStack.fnt');

        this.fonts = ['iceicebaby', 'atari-smooth', 'azo-fire', 'carrier_command', 'vermin', 'chiller', 'clarendon', 'desyrel-pink', 'gem', 'gothic', 'hyperdrive', 'topaz-fill']

        for (let i = 0; i < this.fonts.length; i++)
        {
            this.load.bitmapFont(this.fonts[i], 'assets/fonts/bitmap/' + this.fonts[i] + '.png', 'assets/fonts/bitmap/' + this.fonts[i] + '.xml');
        }
    }
    
    create ()
    {
        const fontSize = 40;
        this.add.dynamicBitmapText(10, 10, 'title', 'YOU CAN WAIT!').setFontSize(fontSize);
        this.add.dynamicBitmapText(10, 10 + fontSize, 'shortStack', 'YOU CAN WIN!').setFontSize(fontSize);

        for (let i = 0; i < this.fonts.length; i++)
        {
            this.add.dynamicBitmapText(10, 50 + ((i+1) * fontSize), this.fonts[i], 'YOU CAN WAIT!').setFontSize(fontSize);
        }
    }

}

const config = {
    // type: Phaser.CANVAS,
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
