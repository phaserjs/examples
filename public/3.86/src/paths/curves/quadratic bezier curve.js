class Example extends Phaser.Scene
{
    graphics;
    curve;
    path;

    create ()
    {
        this.graphics = this.add.graphics();

        this.path = { t: 0, vec: new Phaser.Math.Vector2() };

        const startPoint = new Phaser.Math.Vector2(100, 500);
        const controlPoint1 = new Phaser.Math.Vector2(50, 100);
        const endPoint = new Phaser.Math.Vector2(700, 500);

        this.curve = new Phaser.Curves.QuadraticBezier(startPoint, controlPoint1, endPoint);

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

        this.graphics.lineStyle(1, 0x00ff00, 1);

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
