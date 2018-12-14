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
    var graphics = this.add.graphics();

    polygon = new Phaser.Geom.Polygon([
        200, 150,
        400, 300,
        600, 150,
        750, 300,
        600, 450,
        200, 450,
        50, 300
    ]);

    this.input.on('pointerdown', function (pointer) {

        Phaser.Geom.Polygon.Reverse(polygon);

        redraw();
    });

    redraw();

    function redraw()
    {
        graphics.clear();

        // draw with increasing width
        var width = 1;

        graphics.lineStyle(width, 0x0000aa);
        graphics.beginPath();

        graphics.moveTo(polygon.points[0].x, polygon.points[0].y);

        for(var i = 0; i < polygon.points.length; i++)
        {
            graphics.lineTo(polygon.points[i].x, polygon.points[i].y);
            graphics.lineStyle(++width, 0x0000aa);
        }

        graphics.lineTo(polygon.points[0].x, polygon.points[0].y);

        graphics.closePath();
        graphics.strokePath();
    }
}
