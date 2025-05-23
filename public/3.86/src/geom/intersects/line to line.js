class Example extends Phaser.Scene
{
    graphics;
    line2;
    line1;

    create ()
    {
        this.graphics = this.add.graphics();

        this.line1 = new Phaser.Geom.Line(260, 200, 450, 450);
        this.line2 = new Phaser.Geom.Line(300, 400, 500, 500);

        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeLineShape(this.line1);
        this.graphics.lineStyle(2, 0xffff00);
        this.graphics.strokeLineShape(this.line2);

        this.input.on('pointermove', pointer =>
        {
            this.line2.x2 = pointer.x;
            this.line2.y2 = pointer.y;
        });
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.line1, 0.02);

        this.graphics.clear();
        this.graphics.fillStyle(0xffffff);
        this.graphics.lineStyle(2, 0x00ff00);
        this.graphics.strokeLineShape(this.line1);

        const p = { x: 0, y: 0 };

        if (Phaser.Geom.Intersects.LineToLine(this.line1, this.line2, p))
        {
            this.graphics.lineStyle(2, 0xff0000);
            this.graphics.fillPointShape(p, 8);
        }
        else
        {
            this.graphics.lineStyle(2, 0xffff00);
        }

        this.graphics.strokeLineShape(this.line2);
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
