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
        const rt1 = this.add.renderTexture(0, 0, 400, 600).setOrigin(0, 0);
        const rt2 = this.add.renderTexture(400, 0, 400, 600).setOrigin(0, 0);

        rt1.repeat('crate', null, 0, 0);
        rt2.repeat('raster', null, 0, 0);
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
