var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

var graphics;
var triangle;

function create ()
{
    graphics = this.add.graphics();

    triangle = new Phaser.Geom.Triangle(400, 100, 100, 500, 700, 500);

    graphics.fillStyle(0x00ff00);
    graphics.fillTriangleShape(triangle);

    document.addEventListener('mousemove', function (event) {

        var x = event.clientX;
        var y = event.clientY;

        graphics.clear();

        if (Phaser.Geom.Triangle.Contains(triangle, x, y))
        {
            graphics.fillStyle(0xff0000);
        }
        else
        {
            graphics.fillStyle(0x00ff00);
        }

        graphics.fillTriangleShape(triangle);

    });

}
