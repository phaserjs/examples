var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    state: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var triangle;
var rectangle;
var graphics;

function create ()
{
    graphics = this.add.graphics();

    triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 320, 140);

    rectangle = new Phaser.Geom.Rectangle(200, 150, 300, 200);

    graphics.lineStyle(2, 0x00ff00);
    graphics.strokeRectShape(rectangle);
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeTriangleShape(triangle);

    document.addEventListener('mousemove', function (event) {

        Phaser.Geom.Triangle.CenterOn(triangle, event.clientX, event.clientY);

    });
}

function update ()
{
    Phaser.Geom.Triangle.Rotate(triangle, 0.02);

    graphics.clear();
    graphics.lineStyle(2, 0x00ff00);
    graphics.strokeRectShape(rectangle);

    if (Phaser.Geom.Intersects.RectangleToTriangle(rectangle, triangle))
    {
        graphics.lineStyle(2, 0xff0000);
    }
    else
    {
        graphics.lineStyle(2, 0xffff00);
    }

    graphics.strokeTriangleShape(triangle);
}
