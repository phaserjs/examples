class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        let amount = 0.5;

        for (let y = 0; y < 2; y++)
        {
            for (let x = 0; x < 3; x++)
            {
                const sprite = this.add.sprite(128 + x * 256, 128 + y * 256, 'block');

                sprite.preFX.setPadding(32);

                sprite.preFX.addBarrel(amount);

                this.add.text(128 + x * 256, 128 + y * 256 + 96, amount).setOrigin(0.5, 0).setResolution(window.devicePixelRatio);

                amount += 0.25;
            }
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#47255b',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
