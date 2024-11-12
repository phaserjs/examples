class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });

        const circle = new Phaser.Geom.Circle(400, 300, 200);

        graphics.fillCircleShape(circle);

        this.input.on('pointermove', pointer =>
        {

            graphics.clear();

            if (circle.contains(pointer.x, pointer.y))
            {
                graphics.fillStyle(0x00ff00);
            }
            else
            {
                graphics.fillStyle(0xff0000);
            }

            graphics.fillCircleShape(circle);

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
