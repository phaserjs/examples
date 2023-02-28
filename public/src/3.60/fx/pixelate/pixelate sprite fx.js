class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/neotokyo-ai.jpg');
    }

    create ()
    {
        const sprite = this.add.image(400, 300, 'pic');

        const fx = sprite.preFX.addPixelate(2);

        const text = this.add.text(10, 10, 'Click to toggle FX.Pixelate on/off').setResolution(window.devicePixelRatio);

        text.setShadow(2, 2);

        this.input.on('pointerdown', () => {

            fx.active = !fx.active;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
