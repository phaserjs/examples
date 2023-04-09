class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const triangle = Phaser.Geom.Triangle.BuildEquilateral(200, 200, 200);

        graphics.lineStyle(2, 0x00aa00);

        graphics.strokeTriangleShape(triangle);

        for (let i = 0; i < 6; i++)
        {
            triangle.left += 64;

            graphics.strokeTriangleShape(triangle);
        }

        graphics.lineStyle(2, 0x00ff00);

        graphics.strokeTriangleShape(triangle);
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
