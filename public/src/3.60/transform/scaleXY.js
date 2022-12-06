class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        //  setScale sets the x and y scale values
        this.add.image(100, 300, 'atari').setScale(0.5, 0.2);

        //  If you just provide one value then both x and y are set to it
        this.add.image(400, 300, 'atari').setScale(2);

        const image2 = this.add.image(800, 300, 'atari');

        //  You can also set the scale via the scaleX and scaleY properties:
        image2.scaleX = 0.5;
        image2.scaleY = 4.5;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
