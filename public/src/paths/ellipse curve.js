var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var path;
var curve;
var graphics;

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();

    path = { t: 0, vec: new Phaser.Math.Vector2() };

    // aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation
    // curve = new Phaser.Curves.Ellipse(400, 300, 260, 260, 0, 180, false, 90);

    //  With minimal arguments it creates a circle of radius 260 centered on 400x300:
    curve = new Phaser.Curves.Ellipse(400, 300, 260);

    this.tweens.add({
        targets: path,
        t: 1,
        ease: 'Linear',
        duration: 4000,
        repeat: -1
    });

    //  By adjusting the radius you can create a spiral effect

    /*
    this.tweens.add({
        targets: curve,
        xRadius: 50,
        yRadius: 50,
        ease: 'Sine.easeInOut',
        duration: 16000,
        yoyo: true,
        repeat: -1
    });
    */
}

function update ()
{
    graphics.clear();

    graphics.lineStyle(2, 0xffffff, 1);

    graphics.arc();

    // arc: function (x, y, radius, startAngle, endAngle, anticlockwise)

    curve.getPoint(path.t, path.vec);

    graphics.fillStyle(0xff0000, 1);
    graphics.fillCircle(path.vec.x, path.vec.y, 8);
}
