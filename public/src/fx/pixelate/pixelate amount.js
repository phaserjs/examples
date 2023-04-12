class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/neotokyo-ai.jpg');
    }

    create ()
    {
        const sprite = this.add.image(400, 300, 'pic');

        const fx = sprite.preFX.addPixelate(-1);

        this.add.text(10, 10, '[W] Increase Pixelate\n[S] Decrease Pixelate').setResolution(window.devicePixelRatio).setShadow(2, 2);

        const amount = this.add.text(790, 10, 'FX.amount: -1').setResolution(window.devicePixelRatio).setOrigin(1, 0).setShadow(2, 2);

        this.input.keyboard.on('keydown-W', () => {

            fx.amount++;
            amount.setText(`FX.amount: ${fx.amount}`);

        });

        this.input.keyboard.on('keydown-S', () => {

            if (fx.amount > -1)
            {
                fx.amount--;
                amount.setText(`FX.amount: ${fx.amount}`);
            }

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
