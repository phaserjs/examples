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
        create: create,
        update: update
    }
};

var curve;
var g;
var ship;
var tempVec = new Phaser.Math.Vector2;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ship', 'assets/sprites/lemming.png');
}

function create ()
{
    curve = new Phaser.Curves.Ellipse(400, 300, 200);

    g = this.add.graphics({ fillStyle: { color: 0xffff00, alpha: 0.5 }, lineStyle: { color: 0xff0000, alpha: 0.5 } });

    curve.draw(g);

    var start = curve.getStartPoint();
    var distance = curve.getLength();
    var duration = 5000;
    var speed = distance / duration;
    var speedSec = 1000 * speed;
    var tStep = 1000 / this.game.loop.targetFps / duration;

    console.log('distance (px)', distance);
    console.log('time (ms)', duration);
    console.log('speed (px/ms)', speed);
    console.log('tStep (t/step)', tStep);

    ship = this.physics.add.image(start.x, start.y, 'ship');

    var updateShip = function (counter)
    {
        var t = counter.getValue();

        curve.getTangent(t, tempVec);
        ship.body.velocity.copy(tempVec.scale(speedSec));
        ship.setRotation(tempVec.angle());
    };

    this.tweens.addCounter({
        duration: duration,
        loop: -1,
        onStart: updateShip,
        onLoop: updateShip,
        onUpdate: updateShip
    });
}

function update ()
{
    // g.lineStyle(1, 0x00ffff, 0.5).lineBetween(
    //     ship.body.center.x,
    //     ship.body.center.y,
    //     ship.body.center.x + tempVec.x,
    //     ship.body.center.y + tempVec.y
    // );

    g.fillPointShape(ship.body.center, 2);
}
