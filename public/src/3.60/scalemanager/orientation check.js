class Example extends Phaser.Scene
{
    text;
    ship;

    preload ()
    {
        this.load.image('pic', 'assets/pics/spaceship.png');
    }

    create ()
    {
        this.ship = this.add.image(0, 0, 'pic').setOrigin(0);

        this.text = this.add.text(320, 128, 'Please set your\nphone to landscape', { font: '48px Courier', fill: '#00ff00', align: 'center' }).setOrigin(0.5);

        this.checkOriention(this.scale.orientation);

        this.scale.on('orientationchange', this.checkOriention, this);
    }

    checkOriention (orientation)
    {
        if (orientation === Phaser.Scale.PORTRAIT)
        {
            this.ship.alpha = 0.2;
            this.text.setVisible(true);
        }
        else if (orientation === Phaser.Scale.LANDSCAPE)
        {
            this.ship.alpha = 1;
            this.text.setVisible(false);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: 1,
        width: 640,
        height: 256
    },
    scene: Example
};

const game = new Phaser.Game(config);
