class Example extends Phaser.Scene
{
    graphics;
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
