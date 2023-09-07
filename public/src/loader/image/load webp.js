class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('background', 'assets/tests/background.webp');
    }

    create ()
    {
        this.add.image(400, 300, 'background');
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
