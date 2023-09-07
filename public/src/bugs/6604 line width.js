class Example extends Phaser.Scene
{

    create ()
    {
        const line = this.add.line(100, 100, 200, 300, 500, 200, 0xff0000);
        line.setLineWidth(40);
    }

}

const config = {
    // type: Phaser.CANVAS,
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
