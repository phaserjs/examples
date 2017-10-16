var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload()
{
    this.load.image('spark0', 'assets/particles/blue.png');
    this.load.image('spark1', 'assets/particles/red.png');
    this.load.image('logo', 'assets/sprites/phaser2.png');
}

function create ()
{
    var p0 = new Phaser.Math.Vector2(200, 500);
    var p1 = new Phaser.Math.Vector2(200, 200);
    var p2 = new Phaser.Math.Vector2(600, 200);
    var p3 = new Phaser.Math.Vector2(600, 500);

    curve = new Phaser.Curves.CubicBezier(p0, p1, p2, p3);

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

        tempVec.copy(tangents[i]).normalizeRightHand().scale(-32).add(p);
       
        var emitter = this.add.emitter(tempVec.x, tempVec.y, i % 2 == 0 ? 'spark0' : 'spark1');

        var angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.BetweenPoints(p, tempVec));

        emitter.setEmitAngle(angle, angle);
        emitter.setSpeed(-100, 500);
        emitter.gravityY = 200;
        emitter.setScale(0.4, 0.0);
        emitter.life = 0.8;
        emitter.setBlendMode(Phaser.BlendModes.SCREEN);
    }

    this.add.image(400, 400, 'logo');
}
