class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic', 'assets/pics/cougar-dragonsun.png');
    }

    create ()
    {
        this.add.image(400, 300, 'pic');

        const overlay = this.add.graphics();

        overlay.fillStyle(0x000000, 0.8).fillRect(0, 0, 800, 600);

        const maskGraphics = this.make.graphics();

        maskGraphics.fillStyle(0xffffff);
        maskGraphics.fillRect(100, 100, 256, 256);

        const mask = new Phaser.Display.Masks.BitmapMask(this, maskGraphics);

        mask.invertAlpha = true;

        overlay.setMask(mask);
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
