class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const rectA = new Phaser.Geom.Rectangle(0, 0, 300, 100);
        const rectB = new Phaser.Geom.Rectangle(150, 300, 500, 150);
        const rectC = new Phaser.Geom.Rectangle();

        graphics.lineStyle(1, 0xff0000);
        graphics.strokeRectShape(rectA);

        graphics.lineStyle(1, 0x00ff00);
        graphics.strokeRectShape(rectB);

        this.input.on('pointermove', pointer =>
        {

            graphics.clear();

            Phaser.Geom.Rectangle.CenterOn(rectA, pointer.x, pointer.y);

            Phaser.Geom.Rectangle.Intersection(rectA, rectB, rectC);

            graphics.lineStyle(1, 0xff0000);
            graphics.strokeRectShape(rectA);
        
            graphics.lineStyle(1, 0x00ff00);
            graphics.strokeRectShape(rectB);

            if (!rectC.isEmpty())
            {
                graphics.lineStyle(1, 0xffff00);
                graphics.strokeRectShape(rectC);
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
