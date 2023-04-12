class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
    }

    create ()
    {
        const text = this.add.bitmapText(400, 300, 'ice', 'Phaser 3\nBitmap Text\nGet Bounds', 48, 1);

        text.setOrigin(0.5, 0.5);
        // text.setAngle(10);
        text.setScale(1.25);

        const bounds = text.getBounds();

        const debug = this.add.graphics();

        debug.lineStyle(1, 0x00ff00);
        debug.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
