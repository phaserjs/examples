class Example extends Phaser.Scene
{
    text;
    reflectedLine;
    reflectingLine;
    aimLine;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        this.aimLine = new Phaser.Geom.Line(100, 100, 400, 300);
        this.reflectingLine = new Phaser.Geom.Line(250, 300, 550, 300);
        this.reflectedLine = new Phaser.Geom.Line(250, 300, 550, 300);

        this.text = this.add.text(50, 50, '');

        this.input.on('pointermove', pointer =>
        {

            this.aimLine.x1 = pointer.x;
            this.aimLine.y1 = pointer.y;

        });
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.reflectingLine, 0.005);

        const reflectAngle = Phaser.Geom.Line.ReflectAngle(this.aimLine, this.reflectingLine);

        this.text.setText(`Reflect Angle: ${Phaser.Math.RadToDeg(reflectAngle)}`);

        this.graphics.clear();

        this.graphics.strokeLineShape(this.aimLine);

        this.graphics.lineStyle(4, 0x0000aa);// blue
        this.graphics.strokeLineShape(this.reflectingLine);

        const length = Phaser.Geom.Line.Length(this.aimLine);

        Phaser.Geom.Line.SetToAngle(this.reflectedLine, 400, 300, reflectAngle, length);

        this.graphics.lineStyle(2, 0x00aa00);// green
        this.graphics.strokeLineShape(this.reflectedLine);
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
