class Example extends Phaser.Scene
{
    image;

    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        this.image = this.add.image(400, 300, 'einstein');

        this.input.once('pointerdown', () =>
        {

            console.log('nuked');

            this.image.destroy();

            this.image = null;

        });
    }

    update ()
    {
        if (this.image)
        {
            this.image.rotation += 0.01;
        }
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
