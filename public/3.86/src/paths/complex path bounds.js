class Example extends Phaser.Scene
{
    graphics;
    bounds;
    path;
    follower;

    create ()
    {
        this.graphics = this.add.graphics();

        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };

        this.path = new Phaser.Curves.Path(50, 500);

        this.path.splineTo([ 164, 446, 274, 542, 412, 457, 522, 541, 664, 464 ]);

        this.path.lineTo(700, 300);

        this.path.lineTo(600, 350);

        this.path.ellipseTo(200, 100, 100, 250, false, 0);

        this.path.cubicBezierTo(222, 119, 308, 107, 208, 368);

        this.path.ellipseTo(60, 60, 0, 360, true);

        this.bounds = new Phaser.Geom.Rectangle();

        this.path.getBounds(this.bounds);

        this.tweens.add({
            targets: this.follower,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 4000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.graphics.clear();

        //  Draw the bounds
        this.graphics.lineStyle(1, 0x00ff00, 1).strokeRectShape(this.bounds);

        this.graphics.lineStyle(2, 0xffffff, 1);

        this.path.draw(this.graphics);

        this.path.getPoint(this.follower.t, this.follower.vec);

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillCircle(this.follower.vec.x, this.follower.vec.y, 12);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
