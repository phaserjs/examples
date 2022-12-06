class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/tests/zoom/background.png');
        this.load.image('ship', 'assets/tests/zoom/viper.png');
        this.load.image('bullet', 'assets/tests/zoom/bullet.png');
    }

    create ()
    {
        this.add.image(0, 0, 'bg').setOrigin(0);

        const bullet = this.add.image(-10, -10, 'bullet');

        const ship = this.add.image(40, 40, 'ship').setInteractive();

        let tween;

        ship.on('pointerdown', function ()
        {
            if (tween)
            {
                tween.stop();
            }

            bullet.setPosition(40, 40);

            tween = this.tweens.add({
                targets: bullet,
                x: 200
            });

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'phaser-example',
        width: 160,
        height: 144,
        zoom: Phaser.Scale.MAX_ZOOM
    },
    scene: Example
};

const game = new Phaser.Game(config);

//  In scaleMode NONE the Scale Manager is effectively disabled, so you need to
//  tell it when a resize happens yourself:

window.addEventListener('resize', event =>
{

    game.scale.setMaxZoom();

}, false);

document.body.style.backgroundColor = '#000000';
