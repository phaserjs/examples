class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 3, color: 0xaaaa00 } });

        const pointerTriangle = new Phaser.Geom.Triangle.BuildEquilateral(100, 100, 150);

        const triangles = [];

        for (let k = 0; k < 45; k++)
        {
            triangles.push(new Phaser.Geom.Triangle());
        }

        let i = 0;

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Triangle.CenterOn(pointerTriangle, pointer.x, pointer.y);

            Phaser.Geom.Triangle.CopyFrom(pointerTriangle, triangles[i]);

            i = (i + 1) % triangles.length;

            graphics.clear();

            graphics.strokeTriangleShape(pointerTriangle);

            for (let j = 0; j < triangles.length; j++)
            {
                Phaser.Geom.Triangle.Rotate(triangles[j], 0.15);

                graphics.strokeTriangleShape(triangles[j]);
            }
        });
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
