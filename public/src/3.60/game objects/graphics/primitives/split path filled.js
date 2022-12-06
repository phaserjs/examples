class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.fillStyle(0x00ff00, 1);

        graphics.beginPath();

        graphics.moveTo(200, 200);
        graphics.lineTo(300, 300);
        graphics.lineTo(200, 400);
        graphics.lineTo(200, 200);

        graphics.moveTo(500, 200);
        graphics.lineTo(600, 300);
        graphics.lineTo(500, 400);
        graphics.lineTo(500, 200);

        graphics.fillPath();
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
