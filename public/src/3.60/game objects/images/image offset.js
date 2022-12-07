class Example extends Phaser.Scene
{
    image3;
    image2;
    image1;

    preload ()
    {

        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('tetris', 'assets/sprites/tetrisblock1.png');

    }

    create ()
    {

        this.image1 = this.add.image(500, 200, 'eye');
        this.image2 = this.add.image(180, 150, 'tetris');
        this.image3 = this.add.image(400, 300, 'bunny');

    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
