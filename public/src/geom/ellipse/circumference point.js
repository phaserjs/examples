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

var graphics;
var ellipse;
var point;
var a = 0;
var mm;
var hsv;

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

    ellipse = new Phaser.Geom.Ellipse(400, 300, 600, 300);
    point = new Phaser.Geom.Rectangle(0, 0, 8, 8);

    hsv = Phaser.Display.Color.HSVColorWheel();
    mm = new Phaser.Math.MinMax2(0, 359, 359);
}

function update ()
{
    a += 0.02;

    if (a >= Phaser.Math.PI2)
    {
        a = 0;
        graphics.clear();

        //  Change the ellipse
        ellipse.width = Phaser.Math.Between(0, 800);
        ellipse.height = Phaser.Math.Between(0, 600);
    }

    Phaser.Geom.Ellipse.CircumferencePoint(ellipse, a, point);

    var c = hsv[mm.getNext()].color;

    graphics.fillStyle(c);

    graphics.fillRect(point.x - 4, point.y - 4, point.width, point.height);

    //  Draw a line from the center of the ellipse to the point on the perimeter

    graphics.lineStyle(2, c);
    graphics.beginPath();
    graphics.moveTo(ellipse.x, ellipse.y);
    graphics.lineTo(point.x, point.y);
    graphics.closePath();
    graphics.strokePath();
}
