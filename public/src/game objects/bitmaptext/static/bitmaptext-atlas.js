class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.atlas('fontatlas', 'assets/atlas/bitmap-fonts-debug.png', 'assets/atlas/bitmap-fonts.json');

        //  The XML data for the fonts in the atlas
        this.load.xml('atariXML', 'assets/fonts/bitmap/atari-sunset.xml');
        this.load.xml('azoXML', 'assets/fonts/bitmap/azo-fire.xml');
        this.load.xml('hyperdriveXML', 'assets/fonts/bitmap/hyperdrive.xml');
        this.load.xml('topazXML', 'assets/fonts/bitmap/topaz-fill.xml');
    }

    create ()
    {
        //  Create a new Bitmap Text in the Cache from the given atlas frame and XML data
        Phaser.GameObjects.BitmapText.ParseFromAtlas(this, 'font1', 'fontatlas', 'hyperdrive', 'hyperdriveXML');
        Phaser.GameObjects.BitmapText.ParseFromAtlas(this, 'font2', 'fontatlas', 'azo-fire', 'azoXML');
        Phaser.GameObjects.BitmapText.ParseFromAtlas(this, 'font3', 'fontatlas', 'atari-sunset', 'atariXML');
        Phaser.GameObjects.BitmapText.ParseFromAtlas(this, 'font4', 'fontatlas', 'topaz-fill', 'topazXML');

        const str = '()WTRPyxv^}{';

        this.add.bitmapText(0, 100, 'font1', str);
        this.add.bitmapText(0, 200, 'font2', str);
        this.add.bitmapText(0, 300, 'font3', str);
        this.add.bitmapText(0, 400, 'font4', str);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
