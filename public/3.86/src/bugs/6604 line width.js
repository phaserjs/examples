class Example extends Phaser.Scene
{

    create ()
    {
        const line = this.add.line(400, 300, 0, 0, 256, 0, 0xff0000);

        line.setLineWidth(32, 64);
    }

}

const config = {
    type: Phaser.CANVAS,
    // type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
