class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('frame', 'assets/pics/scrollframe.png');
        this.load.image('pic', 'assets/pics/cougar-face-of-nature.png');
    }

    create ()
    {
        this.add.image(0, 0, 'frame').setOrigin(0);

        //  setDisplaySize will adjust the scale of an image to make it fit the given pixel dimensions:

        this.add.image(32, 32, 'pic').setOrigin(0).setDisplaySize(352, 240);
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
