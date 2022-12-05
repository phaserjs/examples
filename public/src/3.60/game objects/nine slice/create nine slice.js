class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('test', 'assets/sprites/128x128.png');
        this.load.image('test2', 'assets/sprites/button-bg.png');
    }

    create ()
    {
        // this.add.image(400, 170, 'test');

        window.nine = this.add.nineslice(400, 300, 'test2');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
