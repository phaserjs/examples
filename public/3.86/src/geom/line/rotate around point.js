class Example extends Phaser.Scene
{
    points;
    lines;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa }, fillStyle: { color: 0x0000aa } });

        this.lines = [
            new Phaser.Geom.Line(200, 400, 400, 400),
            new Phaser.Geom.Line(400, 400, 600, 400),
            new Phaser.Geom.Line(300, 100, 500, 100),
            new Phaser.Geom.Line(700, 200, 700, 400)
        ];

        this.points = [
            this.lines[0].getPointA(),
            this.lines[1].getPointB(),
            Phaser.Geom.Line.GetMidPoint(this.lines[2]),
            { x: 400, y: 300}
        ];
    }

    update ()
    {

        this.graphics.clear();

        for (let i = 0; i < this.lines.length; i++)
        {
            Phaser.Geom.Line.RotateAroundPoint(this.lines[i], this.points[i], 0.02);

            this.graphics.strokeLineShape(this.lines[i]);

            this.graphics.fillPointShape(this.points[i], 10);
        }
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
