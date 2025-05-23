class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
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
    height: 600
};

const game = new Phaser.Game(config);
// Scene add
game.scene.add('Boot', Example, true);
