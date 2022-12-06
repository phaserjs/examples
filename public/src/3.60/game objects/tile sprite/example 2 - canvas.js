class Example extends Phaser.Scene
{
    iter = 0;
    image1;
    image0;

    preload ()
    {
        this.load.image('image0', 'assets/pics/ra-einstein.png');
        this.load.image('image1', 'assets/sprites/mushroom2.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
    }

    create ()
    {
        this.image0 = this.add.tileSprite(400, 300, 500, 500, 'image0');
        this.add.sprite(400, 300, 'bunny');
        this.image1 = this.add.tileSprite(400, 300, 150, 150, 'image1');
        this.add.bitmapText(0, 0, 'desyrel', 'Hello World');
    }

    update ()
    {
        this.image0.tilePositionX = Math.cos(this.iter) * 400;
        this.image0.tilePositionY = Math.sin(this.iter) * 400;
        this.image1.tilePositionX = Math.cos(-this.iter) * 400;
        this.image1.tilePositionY = Math.sin(-this.iter) * 400;
        this.iter += 0.01;
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
