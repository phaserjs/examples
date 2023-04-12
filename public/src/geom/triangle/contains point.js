class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const triangle = new Phaser.Geom.Triangle(400, 100, 100, 500, 700, 500);

        graphics.fillStyle(0x00ff00);
        graphics.fillTriangleShape(triangle);

        this.input.on('pointermove', pointer =>
        {

            graphics.clear();

            if (Phaser.Geom.Triangle.ContainsPoint(triangle, pointer))
            {
                graphics.fillStyle(0xff0000);
            }
            else
            {
                graphics.fillStyle(0x00ff00);
            }

            graphics.fillTriangleShape(triangle);

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
