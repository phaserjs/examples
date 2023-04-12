class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/nayuki.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'pic').setInteractive();

        const text = this.add.text(10, 10, 'Tap the Sprite', { font: '16px Courier', fill: '#00ff00' });

        const text2 = this.add.text(10, 100, `${Phaser.VERSION} + v2`, { font: '16px Courier', fill: '#ffffff' });

        sprite.on('pointerdown', function ()
        {

            this.setTint(Math.random() * 16000000);

            text.setText('DOWN');

        });

        sprite.on('pointerup', () =>
        {

            text.setText('UP');

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
