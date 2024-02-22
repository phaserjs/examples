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
        const pic = this.add.image(400, 300, 'pic');

        const maskRect = this.add.rectangle(400, 300, 480, 256, 0x000000).setVisible(false);

        const mask = maskRect.createGeometryMask();

        pic.setMask(mask);

        this.tweens.add({
            targets: maskRect,
            angle: 360,
            duration: 5000,
            repeat: -1
        });
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
