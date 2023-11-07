class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush1.png');
        this.load.image('pic', 'assets/pics/brilliance-jim-sachs.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(400, 300, 800, 600);

        const mask = rt.createBitmapMask();

        const pic = this.add.image(400, 300, 'pic');

        pic.setMask(mask);

        this.input.on('pointermove', pointer =>
        {
            if (pointer.isDown)
            {
                rt.draw('brush', pointer.x - 32, pointer.y - 32);
            }

        }, this);

        this.input.keyboard.on('keydown-SPACE', event =>
        {
            // this.game.scale.resize(800, 600);
            rt.resize(800, 600);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
