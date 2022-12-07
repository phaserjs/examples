class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.lineStyle(4, 0x00ff00, 1);

        graphics.strokeRect(32, 32, 256, 256);

        graphics.fillStyle(0xff0000, 0.8);

        graphics.fillCircle(260, 260, 120);

        graphics.lineStyle(4, 0xff00ff, 1);

        graphics.strokeEllipse(400, 300, 200, 128);

        // graphics.setAlpha(0.5);
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
