class Example extends Phaser.Scene
{
    timeText;

    create ()
    {
        this.timeText = this.add.text(100, 200);
    }

    update (time, delta)
    {
        this.timeText.setText(`Time: ${time}\nDelta: ${delta}`);
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
