class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'megaset', 'mask-test2').setInteractive({ pixelPerfect: true });

        const text = this.add.text(10, 10, 'Click. Only the black areas should re-act.', { font: '16px Courier', fill: '#000000' });

        this.input.on('pointerdown', () =>
        {

            text.setText('');

        });

        sprite.on('pointerdown', (pointer, x, y, event) =>
        {

            text.setText('Sprite Alpha clicked');

            event.stopPropagation();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
