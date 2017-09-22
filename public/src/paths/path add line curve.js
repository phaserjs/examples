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

var follower;
var path;
var graphics;

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();

    follower = { t: 0, vec: new Phaser.Math.Vector2() };

    path = new Phaser.Paths.Path();

    path.addLineCurve(100, 100, 500, 200);
    path.addLineCurve(200, 300);
    path.addLineCurve(400, 500);

    this.tweens.add({
        targets: follower,
        t: 1,
        ease: 'Sine.easeInOut',
        duration: 4000,
        yoyo: true,
        repeat: -1
    });
}

function update ()
{
    graphics.clear();
    graphics.lineStyle(2, 0xffffff, 1);

    var line = path.curves[0];
    graphics.lineBetween(line.v1.x, line.v1.y, line.v2.x, line.v2.y);

    var line = path.curves[1];
    graphics.lineBetween(line.v1.x, line.v1.y, line.v2.x, line.v2.y);

    var line = path.curves[2];
    graphics.lineBetween(line.v1.x, line.v1.y, line.v2.x, line.v2.y);

    path.getPoint(follower.t, follower.vec);

    graphics.fillStyle(0xff0000, 1);
    graphics.fillCircle(follower.vec.x, follower.vec.y, 12);
}
