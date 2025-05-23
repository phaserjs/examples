class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
    }

    create ()
    {
        const noTintText = this.add.bitmapText(64, 64, 'ice', 'Phaser III\nTinted Text', 128);
        const tintedText = this.add.bitmapText(64, 400, 'ice', 'Phaser III\nTinted Text', 128);

        tintedText.setTint(0xff00ff, 0xffff00, 0x00ff00, 0xff0000);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
