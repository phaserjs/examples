var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var DELAY = 500;
var t = 0;
var curve;
var points;
var ship;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ship', 'assets/sprites/lemming.png');
}

function create ()
{
    // var p0 = new Phaser.Math.Vector2(100, 500);
    // var p1 = new Phaser.Math.Vector2(50, 100);
    // var p2 = new Phaser.Math.Vector2(600, 100);
    // var p3 = new Phaser.Math.Vector2(750, 300);
    // curve = new Phaser.Curves.CubicBezier(p0, p1, p2, p3);

    curve = new Phaser.Curves.Ellipse(400, 300, 200);

    curve.draw(this.add.graphics({ lineStyle: { color: 0xffffff } }));

    // 32 divisions makes 33 points.
    points = curve.getSpacedPoints(32);

    // Ellipse's first and last points are identical.
    // Discard the last one.
    points.pop();

    console.table(points, ['x', 'y']);

    ship = this.physics.add.image(points[0].x, points[0].y, 'ship');

    nextPoint(this);
}

function nextPoint (scene)
{
    var next = points[t % points.length];

    console.log('move from (%s, %s) to (%s, %s) [%s]', ship.x.toFixed(1), ship.y.toFixed(1), next.x.toFixed(1), next.y.toFixed(1), t % points.length);

    ship.rotation = scene.physics.moveToObject(ship, next, 0, DELAY);

    t++;

    scene.time.addEvent({ delay: DELAY, callback: nextPoint, callbackScope: scene, args: [ scene ] });
}

