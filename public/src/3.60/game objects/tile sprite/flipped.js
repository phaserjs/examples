class Example extends Phaser.Scene
{
    image1;
    image0;

    preload ()
    {
        this.load.image('image0', 'assets/pics/ra-einstein.png');
        this.load.image('image1', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        this.image0 = this.add.tileSprite(400, 300, 500.5, 500, 'image0');
        this.image1 = this.add.tileSprite(400, 300, 150, 150, 'image1');

        // image0.flipX = true;
        // image1.flipY = true;
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
