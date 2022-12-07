class Example extends Phaser.Scene
{
    t = 0.0;
    container;

    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        //  Create some images

        //  Positions are relative to the Container x/y
        const image0 = this.add.image(0, 0, 'lemming');
        const image1 = this.add.image(-100, -100, 'lemming');
        const image2 = this.add.image(100, -100, 'lemming');
        const image3 = this.add.image(100, 100, 'lemming');
        const image4 = this.add.image(-100, 100, 'lemming');

        this.container = this.add.container(400, 300, [ image0, image1, image2, image3, image4 ]);

        this.container.setAlpha(0.8);
        image1.setAlpha(0.5);
        image2.setAlpha(0.5);
        image3.setAlpha(0.5);
        image4.setAlpha(0.5);

        this.tweens.add({
            targets: this.container,
            angle: 360,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.container.setAlpha(Math.abs(Math.sin(this.t)));
        this.t += 0.01;
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
