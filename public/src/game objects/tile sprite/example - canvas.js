class Example extends Phaser.Scene
{
    iter = 0;
    image1;
    image0;

    preload ()
    {
        this.load.image('image0', 'assets/pics/ra-einstein.png');
        this.load.image('image1', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        this.image0 = this.add.tileSprite(400, 300, 500, 500, 'image0');

        this.image0.setAngle(25);
        this.image0.setScale(0.5);

        this.image1 = this.add.tileSprite(400, 300, 150, 150, 'image1');
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
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
