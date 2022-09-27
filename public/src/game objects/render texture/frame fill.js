class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('beer', 'assets/sprites/beer.png');
        this.load.image('crate', 'assets/sprites/crate.png');
        this.load.image('raster', 'assets/demoscene/large-raster32.png');
    }

    create ()
    {
        this.add.rectangle(0, 50, 800, 1, 0x00ff00).setOrigin(0);
        this.add.rectangle(50, 0, 1, 600, 0x00ff00).setOrigin(0);
        this.add.rectangle(350, 0, 1, 600, 0x00ff00).setOrigin(0);
        this.add.rectangle(0, 350, 800, 1, 0x00ff00).setOrigin(0);

        const rt = this.add.renderTexture(50, 50, 300, 300);

        // rt.fillFrame('raster');
        // rt.fillFrame('beer');

        rt.repeat('crate', null, 0, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
