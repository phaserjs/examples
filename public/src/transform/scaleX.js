class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        //  setScale sets the x and y scale values (1 = no scale)
        this.add.image(400, 100, 'atari').setScale(0.5, 1);

        this.add.image(400, 300, 'atari').setScale(2, 1);

        const image2 = this.add.image(400, 500, 'atari');

        //  You can also set the scale via the scaleX property:
        image2.scaleX = 2.5;
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
