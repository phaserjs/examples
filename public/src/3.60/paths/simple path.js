class Example extends Phaser.Scene
{
    graphics;
    path;
    follower;

    create ()
    {
        this.graphics = this.add.graphics();

        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };

        //  The curves do not have to be joined
        const line1 = new Phaser.Curves.Line([ 100, 100, 500, 200 ]);
        const line2 = new Phaser.Curves.Line([ 200, 300, 600, 500 ]);

        this.path = this.add.path();

        // path = new Phaser.Curves.Path();

        this.path.add(line1);
        this.path.add(line2);

        this.tweens.add({
            targets: this.follower,
            t: 1,
            ease: 'Linear',
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
        this.graphics.fillRect(this.follower.vec.x - 8, this.follower.vec.y - 8, 16, 16);
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
