class Example extends Phaser.Scene
{
    points;
    triangles;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 }, fillStyle: { color: 0x0000aa } });

        this.triangles = [
            Phaser.Geom.Triangle.BuildRight(175, 450, 50, 250),
            Phaser.Geom.Triangle.BuildRight(375, 450, 50, 250),
            Phaser.Geom.Triangle.BuildRight(575, 450, 50, 250),
            Phaser.Geom.Triangle.BuildEquilateral(400, 70, 50),
            Phaser.Geom.Triangle.BuildEquilateral(400, 70, 50),
            Phaser.Geom.Triangle.BuildEquilateral(400, 70, 50)
        ];

        this.points = [
            Phaser.Geom.Triangle.Centroid(this.triangles[0]),
            Phaser.Geom.Triangle.CircumCenter(this.triangles[1]),
            Phaser.Geom.Triangle.InCenter(this.triangles[2])
        ];

        Phaser.Geom.Triangle.Decompose(this.triangles[3], this.points);

    }

    update ()
    {

        this.graphics.clear();

        for (let i = 0; i < this.triangles.length; i++)
        {
            Phaser.Geom.Triangle.RotateAroundPoint(this.triangles[i], this.points[i], 0.02);

            this.graphics.strokeTriangleShape(this.triangles[i]);

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
