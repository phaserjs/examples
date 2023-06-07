class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('alien', 'assets/animations/alien.png', 'assets/animations/alien.json');
        this.load.image('bg', 'assets/pics/space-wreck.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alien', { prefix: '01_Idle_', end: 17, zeroPad: 3 }), frameRate: 18 });

        const ripley = this.add.sprite(400, 300, 'alien').play('idle');

        const debug = this.add.text(10, 10);

        this.timer = this.add.text(10, 32);

        ripley.on('animationcomplete-idle', () => {

            const delay = Phaser.Math.Between(100, 5000);

            debug.setText('Next animation in ' + delay + ' ms');

            this.v = delay;

            //  works as expected:
            ripley.playAfterDelay('idle', delay);

            //  delay is accumulated:
            // ripley.play({ key: 'idle', delay: delay }, true);

        });
    }

    update (time, delta)
    {
        this.v -= delta;

        if (this.v < 0)
        {
            this.v = 0;
        }

        this.timer.setText(this.v);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
