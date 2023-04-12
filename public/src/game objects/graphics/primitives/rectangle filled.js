class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.fillStyle(0x00ff00, 1);
        graphics.fillRect(100, 100, 256, 256);

        graphics.fillStyle(0xff0000, 0.5);
        graphics.fillRect(250, 200, 400, 256);
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
