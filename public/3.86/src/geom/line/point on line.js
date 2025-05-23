class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const line = new Phaser.Geom.Line(200, 300, 700, 100);

        graphics.lineStyle(1, 0x00aa00);

        graphics.strokeLineShape(line);

        const x = line.x1 + (line.x2 - line.x1) * 0.1;
        const y = line.y1 + (line.y2 - line.y1) * 0.1;

        graphics.fillStyle(0xff0000);

        graphics.fillRect(x, y, 6, 6);
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
