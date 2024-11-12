class Example extends Phaser.Scene
{
    triangles;
    triangle;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaaaa00, alpha: 0.6 } });

        this.triangle = new Phaser.Geom.Triangle.BuildEquilateral(200, 50, 200);

        this.triangles = [];
    }

    update ()
    {
        Phaser.Geom.Triangle.Rotate(this.triangle, 0.04);

        this.triangles.push(Phaser.Geom.Triangle.Clone(this.triangle));

        this.graphics.clear();

        this.graphics.strokeTriangleShape(this.triangle);

        for (let i = 0; i < this.triangles.length; i++)
        {
            Phaser.Geom.Triangle.Offset(this.triangles[i], 3, 1.5);

            if (this.triangles[i].left > 800)
            {
                this.triangles.splice(i--, 1);
            }
            else
            {
                this.graphics.strokeTriangleShape(this.triangles[i]);
            }
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
