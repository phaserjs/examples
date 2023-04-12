class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('metal', 'assets/textures/alien-metal.jpg');
    }

    create ()
    {
        const graphics = this.add.graphics();

        graphics.lineStyle(16, 0x00ff00, 1);

        graphics.beginPath();

        graphics.moveTo(400, 100);
        graphics.lineTo(200, 278);
        graphics.lineTo(340, 430);
        graphics.lineTo(650, 300);
        graphics.lineTo(700, 180);
        graphics.lineTo(600, 80);

        graphics.closePath();

        graphics.strokePath();
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
