class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('debug', 'assets/pics/checker.png');
    }

    create ()
    {
        const debug = this.add.image(400, 300, 'debug');

        debug.enableFX();

        debug.addShineFX();
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
