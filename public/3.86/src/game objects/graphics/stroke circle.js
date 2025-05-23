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

        const a = new Phaser.Geom.Point(400, 300);
        const radius = 128;

        this.graphics.strokeCircle(a.x, a.y, radius);
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
