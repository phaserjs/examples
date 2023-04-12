class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0xaaaa00 } });

        const triangle = Phaser.Geom.Triangle.BuildEquilateral(400, 300, 150);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Triangle.Rotate(triangle, 0.05);

            Phaser.Geom.Triangle.CenterOn(triangle, pointer.x, pointer.y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.fillTriangleShape(triangle);
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
