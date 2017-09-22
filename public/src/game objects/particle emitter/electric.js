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

var max = 16;
var emitters = [];

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('spark0', 'assets/particles/blue.png');
    this.load.image('spark1', 'assets/particles/yellow.png');
    this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
}

function create ()
{
    var tempVec = new Phaser.Math.Vector2();

    var startPoint = new Phaser.Math.Vector2(50, 260);
    var controlPoint1 = new Phaser.Math.Vector2(610, 25);
    var controlPoint2 = new Phaser.Math.Vector2(320, 370);
    var endPoint = new Phaser.Math.Vector2(735, 550);

    curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);

    for (var c = 0; c <= max; c++)
    {
        var t = curve.getUtoTmapping(c / max);
        var p = curve.getPoint(t);
        var tangent = curve.getTangent(t);

        var emitter = this.add.emitter(p.x, p.y, (c % 2 === 0) ? 'spark0' : 'spark1');

        // tempVec.copy(tangent).normalizeRightHand().scale(-32).add(p);
        tempVec.copy(tangent).scale(-32).add(p);
       
        var angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.BetweenPoints(p, tempVec));

        emitter.setEmitAngle(angle, angle);
        emitter.setSpeed(100, -500);
        emitter.gravityY = 200;
        emitter.setScale(0.2, 0.0);
        emitter.life = 1;
        emitter.setBlendMode(Phaser.BlendModes.ADD);
        emitters.push(emitter);
    }

    var point0 = this.add.image(startPoint.x, startPoint.y, 'dragcircle', 1).setInteractive();
    var point1 = this.add.image(endPoint.x, endPoint.y, 'dragcircle', 1).setInteractive();
    var point2 = this.add.image(controlPoint1.x, controlPoint1.y, 'dragcircle', 2).setInteractive();
    var point3 = this.add.image(controlPoint2.x, controlPoint2.y, 'dragcircle', 2).setInteractive();

    point0.data.set('vector', startPoint);
    point1.data.set('vector', endPoint);
    point2.data.set('vector', controlPoint1);
    point3.data.set('vector', controlPoint2);

    point0.data.set('isControl', false);
    point1.data.set('isControl', false);
    point2.data.set('isControl', true);
    point3.data.set('isControl', true);

    this.input.setDraggable([ point0, point1, point2, point3 ]);

    this.input.events.on('DRAG_START_EVENT', function (event) {

        event.gameObject.setFrame(1);

    });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

        event.gameObject.data.get('vector').set(event.dragX, event.dragY);

        for (var c = 0; c <= max; c++)
        {
            var t = curve.getUtoTmapping(c / max);
            var p = curve.getPoint(t);
            var tangent = curve.getTangent(t);

            emitters[c].x = p.x;
            emitters[c].y = p.y;

            tempVec.copy(tangent).scale(-32).add(p);
            // tempVec.copy(tangent).normalizeRightHand().scale(-32).add(p);
           
            var angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.BetweenPoints(p, tempVec));

            emitters[c].setEmitAngle(angle, angle);
        }

    });

    this.input.events.on('DRAG_END_EVENT', function (event) {

        if (event.gameObject.data.get('isControl'))
        {
            event.gameObject.setFrame(2);
        }
        else
        {
            event.gameObject.setFrame(1);
        }

    });
}

function update ()
{
    emitters.forEach(function (emitter) {
        emitter.emitParticle();
    });
}
