class Example extends Phaser.Scene
{
    preload ()
    {
        this.fonts = [ 'iceicebaby', 'atari-smooth', 'azo-fire', 'carrier_command', 'vermin', 'chiller', 'clarendon', 'desyrel-pink', 'gem', 'gothic', 'hyperdrive', 'topaz-fill' ]

        for (let i = 0; i < this.fonts.length; i++)
        {
            this.load.bitmapFont(this.fonts[ i ], 'assets/fonts/bitmap/' + this.fonts[ i ] + '.png', 'assets/fonts/bitmap/' + this.fonts[ i ] + '.xml');
        }
    }

    create ()
    {
        this.add.text(10, 10, 'Enter your name:', { font: '32px Courier', fill: '#ffffff' });

        const currentText = [];
        const textEntry = this.add.bitmapText(10, 50, 'gem')
            .setFontSize(20)
            .setMaxWidth(200);

        this.input.keyboard.on('keydown', event =>
        {
            if (event.keyCode === 8 && textEntry.text.length > 0)
            {
                textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90))
            {
                textEntry.text += event.key;
                // textEntry.setText([...currentText, event.code].join("") );
            }

            console.log(textEntry.getTextBounds().characters);
        });
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
