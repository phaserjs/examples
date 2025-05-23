class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff00ff } });

        //  Create a little random triangle

        const x1 = Phaser.Math.Between(300, 350);
        const y1 = Phaser.Math.Between(300, 350);

        const x2 = Phaser.Math.Between(400, 450);
        const y2 = Phaser.Math.Between(200, 300);

        const x3 = Phaser.Math.Between(500, 550);
        const y3 = Phaser.Math.Between(300, 350);

        const triangle = new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3);

        graphics.fillTriangleShape(triangle);

        //  Get the circumcircle of the triangle

        const circumcircle = Phaser.Geom.Triangle.CircumCircle(triangle);

        //  Draw the circumcircle

        graphics.strokeCircleShape(circumcircle);
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
