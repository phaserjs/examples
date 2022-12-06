class Example extends Phaser.Scene
{
    timerEvents = [];
    hsv;
    graphics;
    text;

    create ()
    {
        this.text = this.add.text(32, 32);

        for (let i = 0; i < 32; i++)
        {
            this.timerEvents.push(this.time.addEvent({ delay: Phaser.Math.Between(1000, 8000), loop: true }));
        }

        this.hsv = Phaser.Display.Color.HSVColorWheel();

        this.graphics = this.add.graphics({ x: 240, y: 36 });
    }

    update ()
    {
        const output = [];

        this.graphics.clear();

        for (let i = 0; i < this.timerEvents.length; i++)
        {
            output.push(`Event.progress: ${this.timerEvents[i].getProgress().toString().substr(0, 4)}`);

            this.graphics.fillStyle(this.hsv[i * 8].color, 1);
            this.graphics.fillRect(0, i * 16, 500 * this.timerEvents[i].getProgress(), 8);
        }

        this.text.setText(output);
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
