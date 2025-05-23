class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0xaaaa00 } });

        const triangle = new Phaser.Geom.Triangle(0, 0, 0, 600, 400, 300);

        const text = this.add.text(400, 50, '');

        this.input.on('pointermove', pointer =>
        {

            triangle.x3 = pointer.x;
            triangle.y3 = pointer.y;

            redraw();

        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.fillTriangleShape(triangle);

            const area = Phaser.Geom.Triangle.Area(triangle);

            text.setText(`Triangle Area: ${area}`);
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
