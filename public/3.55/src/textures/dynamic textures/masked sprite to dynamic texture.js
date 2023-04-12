class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('mask', 'assets/pics/mask-test2.png');
        this.load.image('pic', 'assets/pics/hotshot-chaos-in-tokyo.png');
    }

    create ()
    {
        const texture = this.textures.addDynamicTexture('maskedPic', 368, 290);

        const pic = this.make.image({ key: 'pic', origin: { x: 0, y: 0 }, add: true });
        const maskImage = this.make.image({ key: 'mask', origin: { x: 0, y: 0 }, add: false });

        pic.mask = new Phaser.Display.Masks.BitmapMask(this, maskImage);

        texture.draw(pic);

        this.add.sprite(560, 300, 'maskedPic');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Example
};

const game = new Phaser.Game(config);
