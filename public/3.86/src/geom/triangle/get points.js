class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 }, fillStyle: { color: 0xffff00 }});

        // triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 200, 300);

        // triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);

        //  Random
        const x1 = Phaser.Math.Between(50, 400);
        const y1 = Phaser.Math.Between(50, 300);

        const x2 = Phaser.Math.Between(450, 750);
        const y2 = Phaser.Math.Between(50, 300);

        const x3 = Phaser.Math.Between(50, 750);
        const y3 = Phaser.Math.Between(350, 550);

        const triangle = new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3);

        graphics.strokeTriangleShape(triangle);

        //  Get 64 points around the triangle
        const points = triangle.getPoints(32);

        //  Every point will be 50px apart (note the 'false' given for the quantity argument)
        //  If the stepRate doesn't divide equally into the triangle dimensions then you'll get offset values at the end
        // var points = triangle.getPoints(false, 50);

        for (let i = 0; i < points.length; i++)
        {
            const p = points[i];

            graphics.fillRect(p.x - 4, p.y - 4, 8, 8);
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
