var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var emitters = [];
var curve = null;
var time = 0;
var game = new Phaser.Game(config);

function preload()
{
    this.load.image('spark0', 'assets/particles/blue.png');
    this.load.image('spark1', 'assets/particles/red.png');
}

function create ()
{
    emitter = this.add.emitter(400, 300, 'spark0');
    emitter.setSpeed(-200, 200);
    emitter.setScale(0.1, 0.0);
    emitter.setBlendMode(Phaser.BlendModes.SCREEN);

    graphics = this.add.graphics();

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

        //  Use this vector to set the velocity of the particle
        tempVec.copy(tangents[i]).normalizeRightHand().scale(-32).add(p);

        graphics.lineStyle(1, 0xff00ff, 1);
        graphics.lineBetween(p.x, p.y, tempVec.x, tempVec.y);
        
        var emitter = this.add.emitter(p.x, p.y, i % 2 == 0 ? 'spark0' : 'spark1');
        emitter.setSpeed(-200, 200);
        emitter.setScale(0.1, 0.0);
        emitter.setBlendMode(Phaser.BlendModes.SCREEN);
        emitters.push(emitter);
    }
}

function update()
{
    emitters.forEach(function (emitter) {
        emitter.emitParticle();
    });
}
