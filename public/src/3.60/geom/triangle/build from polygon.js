class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x00ff00, alpha: 1 }, x: 64, y: 64 });

        const poly = [ 0,0, 400,0, 400,400, 0,400 ]; // rectangle

        const triangles = new Phaser.Geom.Triangle.BuildFromPolygon(poly);

        for (let i = 0; i < triangles.length; i++)
        {
            graphics.strokeTriangleShape(triangles[i]);
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
