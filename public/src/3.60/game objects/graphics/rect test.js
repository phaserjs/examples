class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.fillStyle(0xffff00, 1);
        graphics.fillRect(100, 100, 256, 256);

        graphics.fillStyle(0xff00ff, 0.5);
        graphics.fillRect(300, 200, 256, 256);

        graphics.fillStyle(0x00ff00, 1);
        graphics.fillTriangle(200, 200, 400, 50, 500, 300);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
