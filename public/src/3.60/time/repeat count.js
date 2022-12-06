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

        this.timedEvent = this.time.addEvent({ delay: 2000, callback: this.onEvent, callbackScope: this, repeat: 4 });
    }

    update ()
    {
        this.text.setText(`Event.progress: ${this.timedEvent.getProgress().toString().substr(0, 4)}\nEvent.repeatCount: ${this.timedEvent.repeatCount}`);
    }

    onEvent ()
    {
        this.image.scaleX *= 0.90;
        this.image.scaleY *= 0.90;
        this.image.rotation += 0.04;
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
