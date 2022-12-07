class Example extends Phaser.Scene
{
    image2;
    image1;

    preload ()
    {

        this.load.image('arrow', 'assets/sprites/arrow.png');

    }

    create ()
    {

        this.image1 = this.add.image(300, 300, 'arrow');
        this.image2 = this.add.image(400, 300, 'arrow');

        this.image1.name = 'bill';
        this.image2.name = 'ben';

    }

    update ()
    {

        this.image1.rotation += 0.01;
        this.image2.rotation -= 0.01;

    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
