var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var graphics;
var line;
var line2;
var text;

function create ()
{
    graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

    line = new Phaser.Geom.Line(100, 100, 400, 300);
    line2 = new Phaser.Geom.Line(250, 300, 550, 300);

    text = this.add.text(50, 50, '');

    this.input.on('pointermove', function (pointer) {

        line.x1 = pointer.x;
        line.y1 = pointer.y;

    });
}

function update ()
{
    Phaser.Geom.Line.Rotate(line2, 0.005);

    var reflectAngle = Phaser.Geom.Line.ReflectAngle(line, line2);

    text.setText("Reflect Angle: " + Phaser.Math.RadToDeg(reflectAngle));

    graphics.clear();

    graphics.strokeLineShape(line);

    graphics.lineStyle(4, 0x0000aa);// blue
    graphics.strokeLineShape(line2);

    graphics.lineStyle(2, 0x00aa00);// green – reflected line

    var sin = Math.sin(reflectAngle);
    var cos = Math.cos(reflectAngle);
    var length = Phaser.Geom.Line.Length(line);

    graphics.lineBetween(400, 300, 400 + cos * length, 300 + sin * length);
}
