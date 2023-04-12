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

        // timedEvent = this.time.addEvent({ delay: 2000, callback: onEvent, callbackScope: this });

        //  The same as above, but uses a method signature to declare it (shorter, and compatible with GSAP syntax)
        this.timedEvent = this.time.delayedCall(3000, this.onEvent, [], this);
    }

    update ()
    {
        this.text.setText(`Event.progress: ${this.timedEvent.getProgress().toString().substr(0, 4)}`);
    }

    onEvent ()
    {
        this.image.setScale(0.5);
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
