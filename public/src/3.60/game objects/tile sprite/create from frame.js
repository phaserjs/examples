class Example extends Phaser.Scene
{
    iter = 0;
    tween;
    tilesprite;

    preload ()
    {
        this.load.image('tilesprite', 'assets/pics/alex-bisleys-horsy-512x512.png');
    }

    create ()
    {
        //  If you pass zero as the width and height it'll create a TileSprite
        //  the same size as the frame it uses
        this.tilesprite = this.add.tileSprite(400, 300, 0, 0, 'tilesprite');

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
        this.tilesprite.tilePositionX = Math.cos(this.iter) * 700;
        this.tilesprite.tilePositionY = Math.sin(this.iter) * 500;

        this.tilesprite.tileScaleX = this.tween.getValue();
        this.tilesprite.tileScaleY = this.tween.getValue();

        this.iter += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
