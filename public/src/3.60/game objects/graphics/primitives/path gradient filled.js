class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.fillGradientStyle(0xff0000, 0x00ff00, 0xff0000, 0xffff00, 1);

        graphics.beginPath();

        graphics.moveTo(400, 100);
        graphics.lineTo(200, 278);
        graphics.lineTo(340, 430);
        graphics.lineTo(650, 300);
        graphics.lineTo(700, 180);
        graphics.lineTo(600, 80);

        graphics.closePath();
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
