class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa } });

        const rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);
        const pointerRect = new Phaser.Geom.Rectangle(450, 350, 150, 100);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Rectangle.CenterOn(pointerRect, pointer.x, pointer.y);

            redraw();
        });

        redraw();

        function redraw ()
        {
            graphics.clear();

            graphics.strokeRectShape(rect);
            graphics.strokeRectShape(pointerRect);

            const intersection = Phaser.Geom.Intersects.GetRectangleIntersection(rect, pointerRect);

            graphics.lineStyle(2, 0xaa0000);
            graphics.strokeRectShape(intersection);
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
