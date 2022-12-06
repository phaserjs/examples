class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
    }

    create ()
    {
        const image1 = this.add.image(200, 300, 'atlas', 'phaser2');

        image1.setCrop(0, 0, 200, 100);

        const image2 = this.add.image(400, 300, 'atlas', 'cactuar');

        image2.setCrop(0, 0, 200, 50);
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
