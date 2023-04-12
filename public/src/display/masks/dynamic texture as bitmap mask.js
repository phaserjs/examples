class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/underwater1.png');
        this.load.image('bg2', 'assets/skies/toxic.png');
        this.load.image('skull', 'assets/pics/skull.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const banner = this.textures.addDynamicTexture('skullTexture', 800, 600)

        banner.stamp('skull', null, 400, 300);

        const mask = this.add.bitmapMask(banner);

        this.add.image(400, 300, 'bg2').setMask(mask);
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
