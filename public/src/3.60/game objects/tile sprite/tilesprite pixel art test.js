class Example extends Phaser.Scene
{
    iter = 0;
    tilesprite;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        this.tilesprite = this.add.tileSprite(400, 300, 800, 600, 'mushroom');
    }

    update ()
    {
        this.tilesprite.rotation -= 0.01;

        this.tilesprite.tileScaleX = Math.sin(this.iter) * 10;
        this.tilesprite.tileScaleY = Math.sin(this.iter) * 10;

        this.iter += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    backgroundColor: '#2d2d2d',
    scene: Example
};

const game = new Phaser.Game(config);
