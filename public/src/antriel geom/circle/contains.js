var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();

    circle = new Phaser.Geom.Circle(400, 300, 200);

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {

        graphics.clear();

        if(circle.contains(event.x, event.y))
        {
            graphics.fillStyle(0x00ff00);
        }
        else
        {
            graphics.fillStyle(0xff0000);
        }

        graphics.fillCircleShape(circle);

    });
}