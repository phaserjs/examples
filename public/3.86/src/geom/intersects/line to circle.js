class Example extends Phaser.Scene
{
    graphics;
    circle;
    line;

    create ()
    {
        this.graphics = this.add.graphics();

        this.line = new Phaser.Geom.Line(260, 200, 450, 450);

        this.circle = new Phaser.Geom.Circle(300, 400, 60);

        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeLineShape(this.line);
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeCircleShape(this.circle);

        this.input.on('pointermove', pointer =>
        {

            this.circle.x = pointer.x;
            this.circle.y = pointer.y;

        });
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.line, 0.02);

        this.graphics.clear();
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeLineShape(this.line);

        if (Phaser.Geom.Intersects.LineToCircle(this.line, this.circle))
        {
            this.graphics.lineStyle(2, 0xff0000);
        }
        else
        {
            this.graphics.lineStyle(2, 0xffff00);
        }

        this.graphics.strokeCircleShape(this.circle);
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
