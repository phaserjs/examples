class Example extends Phaser.Scene
{
    polygons;
    seedPolygon;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

        this.seedPolygon = new Phaser.Geom.Polygon([
            new Phaser.Geom.Point(100, 50),
            new Phaser.Geom.Point(150, 100),
            new Phaser.Geom.Point(100, 150),
            new Phaser.Geom.Point(50, 100)
        ]);

        this.input.on('pointermove', pointer =>
        {
            this.seedPolygon.points[1].x = 100 + pointer.x / 4;
            this.seedPolygon.points[1].y = 50 + pointer.y / 3;
        });

        this.polygons = [];
    }

    update ()
    {
        this.polygons.push(Phaser.Geom.Polygon.Clone(this.seedPolygon));

        this.graphics.clear();

        for (let i = 0; i < this.polygons.length; i++)
        {
            const poly = this.polygons[i];

            if (poly.points[0].x > 800)
            {
                this.polygons.splice(i--, 1);
                continue;
            }

            for (let j = 0; j < poly.points.length; j++)
            {
                poly.points[j].x += 8 + j;
                poly.points[j].y += 6 + j;
            }

            this.graphics.strokePoints(poly.points, true);
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
