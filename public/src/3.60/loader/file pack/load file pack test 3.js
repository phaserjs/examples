class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.pack('pack1', 'assets/loader-tests/pack1.json');
    }

    create ()
    {
        this.add.image(400, 300, 'taikodrummaster');
        this.add.image(900, 300, 'TEST2.donuts');
        this.add.image(400, 500, 'sukasuka-chtholly');
        this.add.image(180, 300, 'TEST2.ayu');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
