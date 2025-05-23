class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.fillGradientStyle(0xff0000, 0xff0000, 0x0000ff, 0x0000ff, 1);

        graphics.fillCircle(300, 300, 200);

        graphics.fillGradientStyle(0xff0000, 0xff0000, 0xffff00, 0xffff00, 1);

        graphics.fillCircle(500, 300, 140);
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
