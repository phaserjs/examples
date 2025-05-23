class Example extends Phaser.Scene
{
    graphics;
    curve;
    path;

    create ()
    {
        this.graphics = this.add.graphics();

        this.path = { t: 0, vec: new Phaser.Math.Vector2() };

        this.curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(100, 100), new Phaser.Math.Vector2(600, 400));

        this.tweens.add({
            targets: this.path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0xffffff, 1);

        this.curve.draw(this.graphics);

        this.curve.getPoint(this.path.t, this.path.vec);

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillCircle(this.path.vec.x, this.path.vec.y, 16);
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
