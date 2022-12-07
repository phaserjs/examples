class Example extends Phaser.Scene
{
    tempVecP;
    tempVec;
    ship;
    points;
    curve;
    t = 0;

    preload ()
    {
        this.load.image('ship', 'assets/sprites/lemming.png');
    }

    create ()
    {
        // var p0 = new Phaser.Math.Vector2(100, 500);
        // var p1 = new Phaser.Math.Vector2(50, 100);
        // var p2 = new Phaser.Math.Vector2(600, 100);
        // var p3 = new Phaser.Math.Vector2(750, 300);
        // curve = new Phaser.Curves.CubicBezier(p0, p1, p2, p3);

        this.curve = new Phaser.Curves.Ellipse(400, 300, 200);

        this.points = this.curve.getSpacedPoints(32);

        this.tempVec = new Phaser.Math.Vector2();
        this.tempVecP = new Phaser.Math.Vector2();

        this.ship = this.matter.add.image(this.points[0].x, this.points[0].y, 'ship');
        this.ship.setFrictionAir(0.0005);

        this.nextPoint(this);
    }

    update ()
    {
        // var t = curve.getUtoTmapping(map.u);

        // curve.getPoint(t + 0.1, tempVecP);
        // curve.getTangent(t, tempVec);

        // tempVec.scale(180);

        // ship.setVelocity(tempVec.x, tempVec.y);

        // ship.rotation = Phaser.Math.Angle.Between(ship.x, ship.y, tempVecP.x, tempVecP.y);
    }

    nextPoint (scene)
    {
        const next = this.points[this.t % this.points.length];

        this.moveToXY(this.ship, next.x, next.y, 0, 500);

        this.t++;

        scene.time.addEvent({ delay: 500, callback: this.nextPoint, callbackScope: scene, args: [ scene ] });
    }

    moveToXY (gameObject, x, y, speed, maxTime)
    {
        if (speed === undefined) { speed = 60; }
        if (maxTime === undefined) { maxTime = 0; }

        const angle = Math.atan2(y - gameObject.y, x - gameObject.x);

        if (maxTime > 0)
        {
            //  We know how many pixels we need to move, but how fast?
            const dx = gameObject.x - x;
            const dy = gameObject.y - y;

            speed = Math.sqrt(dx * dx + dy * dy) / (maxTime / 1000);
        }

        gameObject.setVelocityX((Math.cos(angle) * speed) / 100);
        gameObject.setVelocityY((Math.sin(angle) * speed) / 100);

        // gameObject.rotation = angle;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                scale: 0
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
