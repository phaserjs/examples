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

        const a = new Phaser.Geom.Point(400, 100);
        const b = new Phaser.Geom.Point(200, 400);
        const c = new Phaser.Geom.Point(600, 400);

        this.graphics.strokeTriangle(a.x, a.y, b.x, b.y, c.x, c.y);
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
