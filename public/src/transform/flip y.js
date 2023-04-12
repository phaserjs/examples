class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/cougar-face-of-nature.png');
    }

    create ()
    {
        //  Default non-flipped image
        this.add.image(250, 164, 'pic');

        //  Flipped via a call to setFlipY
        this.add.image(250, 464, 'pic').setFlipY(true);

        const image = this.add.image(650, 164, 'pic');

        //  Flipped via setting the flipY property
        image.flipY = true;

        const image2 = this.add.image(650, 464, 'pic');

        this.input.on('pointerdown', () =>
        {

            //  Flipped via a call to toggleFlipX
            image2.toggleFlipY();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
