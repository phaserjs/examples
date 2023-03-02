class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('pic', 'assets/pics/neotokyo-ai.jpg');
        this.load.image('logo', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        const a = this.add.image(400, 300, 'pic');
        const b = this.add.image(600, 300, 'logo');

        // a.preFX.addPixelate(2);
        a.postFX.addPixelate(2);

        const m = this.make.graphics();

        m.fillRectShape(new Phaser.Geom.Rectangle(0, 0, 700, 800));

        const mask = m.createGeometryMask();

        this.cameras.main.setMask(mask);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Demo
};

const game = new Phaser.Game(config);
