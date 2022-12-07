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

        //  Flipped via a call to setFlipX
        this.add.image(250, 464, 'pic').setFlipX(true);

        const image = this.add.image(650, 164, 'pic');

        //  Flipped via setting the flipX property
        image.flipX = true;

        const image2 = this.add.image(650, 464, 'pic');

        this.input.on('pointerdown', () =>
        {

            //  Flipped via a call to toggleFlipX
            image2.toggleFlipX();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
