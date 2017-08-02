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
var ellipse;
var point;
var a = 0;

function create ()
{
    graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

    ellipse = new Phaser.Geom.Ellipse(400, 300, 600, 300);
    point = new Phaser.Geom.Rectangle(0, 0, 8, 8);
}

function update ()
{
    a += 0.02;

    if (a >= Phaser.Math.PI2)
    {
        a = 0;
        graphics.clear();

        //  Change the ellipse
        ellipse.width = Phaser.Math.Between(100, 700);
        ellipse.height = Phaser.Math.Between(100, 500);
    }

    Phaser.Geom.Ellipse.CircumferencePoint(ellipse, a, point);

    graphics.fillRect(point.x - 4, point.y - 4, point.width, point.height);

    //  Draw a line from the center of the ellipse to the point on the perimeter

    graphics.lineStyle(2, 0xffffff);
    graphics.beginPath();
    graphics.moveTo(ellipse.x, ellipse.y);
    graphics.lineTo(point.x, point.y);
    graphics.closePath();
    graphics.strokePath();
}
