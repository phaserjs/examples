class Example extends Phaser.Scene
{
    timedEvent;
    text;
    image;

    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        this.image = this.add.image(400, 300, 'einstein');

        this.text = this.add.text(32, 32);

        this.timedEvent = new Phaser.Time.TimerEvent({ delay: 4000 });

        this.time.addEvent(this.timedEvent);

        this.input.on('pointerdown', () =>
        {

            this.time.addEvent(this.timedEvent);

        }, this);
    }

    update ()
    {
        const progress = this.timedEvent.getProgress();

        this.text.setText([
            'Click to restart the Timer',
            `Event.progress: ${progress.toString().substr(0, 4)}`
        ]);

        this.image.setAngle(progress * 20);
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
