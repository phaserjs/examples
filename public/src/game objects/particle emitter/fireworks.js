var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();

    var p0 = new Phaser.Math.Vector2(200, 500);
    var p1 = new Phaser.Math.Vector2(200, 200);
    var p2 = new Phaser.Math.Vector2(600, 200);
    var p3 = new Phaser.Math.Vector2(600, 500);

    var curve = new Phaser.Curves.CubicBezier(p0, p1, p2, p3);

    var max = 28;
    var points = [];
    var tangents = [];

    for (var c = 0; c <= max; c++)
    {
        var t = curve.getUtoTmapping(c / max);

        points.push(curve.getPoint(t));
        tangents.push(curve.getTangent(t));
    }

    var tempVec = new Phaser.Math.Vector2();

    for (var i = 0; i < points.length; i++)
    {
        var p = points[i];

        //  Use this vector to set the velocity of the particle
        tempVec.copy(tangents[i]).normalizeRightHand().scale(-32).add(p);

        graphics.lineStyle(1, 0xff00ff, 1);
        graphics.lineBetween(p.x, p.y, tempVec.x, tempVec.y);
    }
}
