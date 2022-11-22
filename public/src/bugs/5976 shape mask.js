class Scene extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.image('pic', 'assets/pics/barbarian-loading.png');
    }

    create()
    {
        // const shape = this.add.rectangle(400, 300, 300, 200, 0xff0000);
        // const shape = this.add.circle(400, 300, 120, 0xff0000);
        const shape = this.add.isobox(400, 300, 80, 80, 0x00b9f2, 0x016fce, 0x028fdf);

        const mask = shape.createBitmapMask();

        const pic = this.add.image(400, 300, 'pic');

        pic.mask = mask;

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Scene
}

new Phaser.Game(config);
