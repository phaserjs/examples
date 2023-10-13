class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mask', 'assets/tests/masks/chrome-mask.png');
        this.load.image('pic', 'assets/pics/brilliance-jim-sachs.png');
    }

    create ()
    {
        const rt = this.make.sprite({
            x: 400,
            y: 300,
            key: 'mask',
            add: false
        });

        const mask = rt.createBitmapMask();

        const pic = this.add.image(400, 300, 'pic');

        pic.setMask(mask);

        console.log(mask);

        window['renderer'] = this.renderer;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: '100%',
    height: '100%',
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: Example
};

const game = new Phaser.Game(config);
