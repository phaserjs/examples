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

var moveShape;
var circle;
var rectangle;
var graphics;

function create ()
{
    graphics = this.add.graphics();

    rectangle = new Phaser.Geom.Rectangle(200, 150, 300, 200);
    circle = new Phaser.Geom.Circle(300, 400, 60);

    moveShape = circle;

    this.input.events.on('POINTER_UP_EVENT', function (event) {

        if (moveShape === circle)
        {
            moveShape = rectangle;
        }
        else
        {
            moveShape = circle;
        }

    });

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {

        moveShape.x = event.x;
        moveShape.y = event.y;

    });
}

function update ()
{
    graphics.clear();

    if (Phaser.Geom.Intersects.CircleToRectangle(circle, rectangle))
    {
        graphics.lineStyle(2, 0xff0000);
    }
    else
    {
        graphics.lineStyle(2, 0xffff00);
    }

    graphics.strokeRectShape(rectangle);
    graphics.strokeCircleShape(circle);
}
