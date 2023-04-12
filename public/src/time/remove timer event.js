class Example extends Phaser.Scene
{
    timedEvent;
    c = 0;
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

        this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true });
    }

    update ()
    {
        this.text.setText(`Event.progress: ${this.timedEvent.getProgress().toString().substr(0, 4)}\nEvent removed at 10: ${this.c}`);
    }

    onEvent ()
    {
        this.image.rotation += 0.04;

        this.c++;

        if (this.c === 10)
        {
            this.timedEvent.remove(false);
        }
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
