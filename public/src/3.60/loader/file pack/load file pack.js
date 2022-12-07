class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.pack('pack1', 'assets/loader-tests/pack1.json', 'test1');
    }

    create ()
    {
        this.add.image(400, 300, 'taikodrummaster');
        this.add.image(400, 500, 'sukasuka-chtholly');
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
