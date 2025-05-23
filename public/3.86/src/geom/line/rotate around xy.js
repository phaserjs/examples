class Example extends Phaser.Scene
{
    x;
    line;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        this.line = new Phaser.Geom.Line(100, 300, 400, 300);

        this.input.on('pointermove', pointer =>
        {

            this.x = pointer.x / 800;

        });
    }

    update ()
    {
        this.graphics.clear();

        Phaser.Geom.Line.RotateAroundXY(this.line, this.line.x1, this.line.y2, 0.03);

        this.graphics.strokeLineShape(this.line);
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
