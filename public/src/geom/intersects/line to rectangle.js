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
var rect;
var graphics;

function create ()
{
    graphics = this.add.graphics();

    line = new Phaser.Geom.Line(260, 200, 450, 450);

    graphics.lineStyle(2, 0x00ff00);
    graphics.strokeLineShape(line);

    // graphics.lineStyle(2, 0xffff00);
    // graphics.strokeLineShape(line2);

    document.addEventListener('mousemove', function (event) {

        line.x2 = event.clientX;
        line.y2 = event.clientY;

    });
}

function update ()
{
    graphics.clear();

    graphics.lineStyle(2, 0x00ff00);
    graphics.strokeLineShape(line);

    // var p = { x: 0, y: 0 };

    // if (Phaser.Geom.Intersects.LineToLine(line1, line2, p))
    // {
    //     graphics.lineStyle(2, 0xff0000);
    //     graphics.fillPointShape(p, 4);
    // }
    // else
    // {
    //     graphics.lineStyle(2, 0xffff00);
    // }

    // graphics.strokeLineShape(line2);
}
