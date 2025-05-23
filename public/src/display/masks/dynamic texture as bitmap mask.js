class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/skies/underwater1.png');
        this.load.image('bg2', 'assets/skies/toxic.png');
        this.load.image('skull', 'assets/pics/skull.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const banner = this.textures.addDynamicTexture('skullTexture', 800, 600)

        banner.stamp('skull', null, 400, 300).render();

        const image = this.add.image(400, 300, 'bg2');
        image.enableFilters();
        image.filters.external.addMask('skullTexture');
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
