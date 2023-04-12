class Example extends Phaser.Scene
{
    graphics;
    rect;
    line;

    create ()
    {
        this.graphics = this.add.graphics();

        this.line = new Phaser.Geom.Line(260, 200, 550, 400);
        this.rect = new Phaser.Geom.Rectangle(32, 32, 128, 96);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Rectangle.CenterOn(this.rect, pointer.x, pointer.y);

        });
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.line, 0.01);

        this.graphics.clear();

        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeLineShape(this.line);

        if (Phaser.Geom.Intersects.LineToRectangle(this.line, this.rect))
        {
            this.graphics.lineStyle(2, 0xff0000);
        }
        else
        {
            this.graphics.lineStyle(2, 0xffff00);
        }

        this.graphics.strokeRectShape(this.rect, 2);
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
