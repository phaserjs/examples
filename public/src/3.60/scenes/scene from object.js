
class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.add.image(400, 300, 'face');
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
