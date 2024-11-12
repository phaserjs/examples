class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.lineGradientStyle(128, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, 1);

        graphics.lineBetween(100, 100, 600, 500);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
