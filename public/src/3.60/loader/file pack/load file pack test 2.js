class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.pack('pack1', 'assets/loader-tests/pack1.json', 'test2');
    }

    create ()
    {
        this.add.image(400, 300, 'TEST2.donuts');
        this.add.image(500, 300, 'TEST2.ayu');
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
