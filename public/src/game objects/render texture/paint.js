class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush1.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(400, 300, 800, 600);

        this.input.on('pointermove', pointer =>
        {

            if (pointer.isDown)
            {
                rt.draw('brush', pointer.x - 32, pointer.y - 32);
            }

        }, this);
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
