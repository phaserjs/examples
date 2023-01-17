class Example extends Phaser.Scene
{
    position;
    slope;
    text;
    line;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa }, fillStyle: { color: 0x0000aa } });

        this.line = new Phaser.Geom.Line(150, 400, 550, 450);

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
        this.position += this.slope;

        this.position = Phaser.Math.Clamp(this.position, 0, 100);

        this.graphics.clear();

        this.graphics.strokeLineShape(this.line);

        const point = Phaser.Geom.Line.GetPoint(this.line, this.position / 100);

        this.graphics.fillPointShape(point, 25);
    }

    calculate ()
    {
        this.slope = Phaser.Geom.Line.Slope(this.line);

        this.text.setText(`Line Slope: ${this.slope}`);
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
