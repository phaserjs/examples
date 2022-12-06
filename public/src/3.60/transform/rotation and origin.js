class Example extends Phaser.Scene
{
    image4;
    image3;
    image2;
    image1;

    preload ()
    {
        this.load.image('grid', 'assets/pics/debug-grid-1920x1920.png');
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        this.add.image(0, 0, 'grid').setOrigin(0);

        this.image1 = this.add.image(200, 320, 'atari'); // default origin is 0.5 = the center
        this.image2 = this.add.image(400, 320, 'atari').setOrigin(0);
        this.image3 = this.add.image(600, 320, 'atari').setOrigin(0.25, 0.75);
        this.image4 = this.add.image(800, 320, 'atari').setOrigin(1);
    }

    update ()
    {
        this.image1.rotation += 0.01;
        this.image2.rotation += 0.01;
        this.image3.rotation += 0.01;
        this.image4.rotation += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
