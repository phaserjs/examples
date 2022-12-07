class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xffff00 } });

        //  Create a random triangle

        const x1 = Phaser.Math.Between(100, 700);
        const y1 = Phaser.Math.Between(50, 550);

        const x2 = Phaser.Math.Between(100, 700);
        const y2 = Phaser.Math.Between(50, 550);

        const x3 = Phaser.Math.Between(100, 700);
        const y3 = Phaser.Math.Between(50, 550);

        const triangle = new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3);

        graphics.strokeTriangleShape(triangle);

        //  Get the centroid of the triangle

        const centroid = Phaser.Geom.Triangle.Centroid(triangle);

        //  Draw lines from each point of the triangle to the centroid

        graphics.lineStyle(1, 0x00ff00);

        graphics.lineBetween(x1, y1, centroid.x, centroid.y);
        graphics.lineBetween(x2, y2, centroid.x, centroid.y);
        graphics.lineBetween(x3, y3, centroid.x, centroid.y);

        //  Draw the centroid

        graphics.fillPointShape(centroid, 4);
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
