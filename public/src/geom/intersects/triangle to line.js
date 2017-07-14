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

var line;
var triangle;
var graphics;

function create ()
{
    graphics = this.add.graphics();

    triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 200, 200);
    line = new Phaser.Geom.Line(260, 200, 450, 450);

    graphics.lineStyle(2, 0x00ff00);
    graphics.strokeTriangleShape(triangle);
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeLineShape(line);

    document.addEventListener('mousemove', function (event) {

        line.x2 = event.clientX;
        line.y2 = event.clientY;

    });
}

function update ()
{
    Phaser.Geom.Triangle.Rotate(triangle, 0.02);

    graphics.clear();
    graphics.fillStyle(0xffffff);
    graphics.lineStyle(2, 0x00ff00);
    graphics.strokeTriangleShape(triangle);

    if (Phaser.Geom.Intersects.TriangleToLine(triangle, line))
    {
        graphics.lineStyle(2, 0xff0000);
    }
    else
    {
        graphics.lineStyle(2, 0xffff00);
    }

    graphics.strokeLineShape(line);
}
