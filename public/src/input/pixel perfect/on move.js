class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('logoAlpha', 'assets/sprites/phaser3-logo-alpha.png');
    }

    create ()
    {
        //  This sprite is clickable on any pixel that has an alpha value >= 1
        const sprite1 = this.add.sprite(400, 200, 'logo').setInteractive({ pixelPerfect: true });

        //  This sprite is clickable on any pixel that has an alpha value >= 100 (i.e. the left side of the sprite)
        const sprite2 = this.add.sprite(400, 400, 'logoAlpha').setInteractive(this.input.makePixelPerfect(100));

        const text = this.add.text(10, 10, 'Click either of the sprites', { font: '16px Courier', fill: '#000000' });

        this.input.on('pointermove', () =>
        {

            text.setText('');

        });

        sprite1.on('pointermove', (pointer, x, y, event) =>
        {

            text.setText('Moved over Sprite 1');

            event.stopPropagation();

        });

        sprite2.on('pointermove', (pointer, x, y, event) =>
        {

            text.setText('Moved over Sprite 2');

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
