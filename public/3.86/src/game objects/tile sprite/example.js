class Example extends Phaser.Scene
{
    iter = 0;
    tween;
    image1;
    image0;

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('image0', 'assets/pics/ra-einstein.png');
        this.load.image('image1', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        this.image0 = this.add.tileSprite(400, 300, 800, 600, 'image0');
        this.image1 = this.add.tileSprite(400, 300, 250, 250, 'image1');

        this.tween = this.tweens.addCounter({
            from: 1,
            to: 2,
            duration: 5000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.image0.tilePositionX = Math.cos(this.iter) * 700;
        this.image0.tilePositionY = Math.sin(this.iter) * 500;

        this.image0.tileScaleX = this.tween.getValue();
        this.image0.tileScaleY = this.tween.getValue();

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
