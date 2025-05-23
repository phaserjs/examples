class Example extends Phaser.Scene
{
    graphics;

    create ()
    {
        this.graphics = this.add.graphics();

        const color = 0xffff00;
        const thickness = 4;
        const alpha = 1;

        this.graphics.lineStyle(thickness, color, alpha);

        this.graphics.beginPath();

        this.graphics.moveTo(400, 100);
        this.graphics.lineTo(200, 278);
        this.graphics.lineTo(340, 430);
        this.graphics.lineTo(650, 80);

        this.graphics.closePath();
        this.graphics.strokePath();
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
