class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        //  setScale sets the x and y scale values (1 = no scale)
        this.add.image(100, 300, 'atari').setScale(1, 0.5);

        this.add.image(400, 300, 'atari').setScale(1, 2);
        
        const image2 = this.add.image(700, 300, 'atari');

        //  You can also set the scale via the scaleY property:
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
