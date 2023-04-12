class Example extends Phaser.Scene
{
    position;
    perpSlope;
    text;
    line;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa }, fillStyle: { color: 0x0000aa } });

        this.line = new Phaser.Geom.Line(250, 100, 200, 500);

        this.text = this.add.text(50, 50, '');

        this.position = 50;

        this.input.on('pointermove', pointer =>
        {

            this.line.x2 = pointer.x;
            this.line.y2 = pointer.y;

            this.calculate();
        });

        this.calculate();
    }

    update ()
    {
        this.position += this.perpSlope;

        this.position = Phaser.Math.Clamp(this.position, 0, 250);

        const normal = Phaser.Geom.Line.GetNormal(this.line);

        const midPoint = Phaser.Geom.Line.GetMidPoint(this.line);

        this.graphics.clear();

        this.graphics.strokeLineShape(this.line);

        this.graphics.lineStyle(4, 0x00aa00);
        this.graphics.lineBetween(midPoint.x, midPoint.y,
            midPoint.x + normal.x * 250,
            midPoint.y + normal.y * 250);

        normal.x *= this.position;
        normal.y += this.position;

        this.graphics.fillCircle(midPoint.x + normal.x, midPoint.y + normal.y, 12);
    }

    calculate ()
    {
        this.perpSlope = Phaser.Geom.Line.PerpSlope(this.line);

        this.text.setText(`Line Perpendicular Slope: ${this.perpSlope}`);
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
