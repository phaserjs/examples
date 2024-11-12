class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0xaa0000 } });

        const rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);

        graphics.fillRectShape(rect);

        this.input.on('pointermove', pointer =>
        {

            graphics.clear();

            if (rect.contains(pointer.x, pointer.y))
            {
                graphics.fillStyle(0x0000aa);
            }
            else
            {
                graphics.fillStyle(0xaa0000);
            }

            graphics.fillRectShape(rect);

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
