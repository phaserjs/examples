class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/space.png');
        this.load.image('ship', 'assets/tweens/spacetank.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const ship = this.add.image(200, 300, 'ship');

        const status = this.add.text(10, 10, '', { color: '#00ff00', fontSize: 16 });

        const log = [];

        const tween = this.tweens.add({
            targets: ship,
            x: 700,
            ease: 'Power1',
            duration: 3000,
            yoyo: true,
            repeat: 2,
            flipX: true,
            onStart: () => {
                log.push('onStart');
                status.setText(log);
            },
            onComplete: () => {
                log.push('onComplete');
                status.setText(log);
            },
            onYoyo: () => {
                log.push('onYoyo');
                status.setText(log);
            },
            onRepeat: () => {
                log.push('onRepeat');
                status.setText(log);
            },
            onPause: () => {
                log.push('onPause');
                status.setText(log);
            },
            onResume: () => {
                log.push('onResume');
                status.setText(log);
            }
        });

        this.input.on('pointerdown', () => {

            if (tween.isPlaying())
            {
                tween.pause();
            }
            else
            {
                tween.resume();
            }

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
