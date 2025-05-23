class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const curve = new Phaser.Curves.Line(new Phaser.Math.Vector2(100, 200), new Phaser.Math.Vector2(600, 400));

        graphics.clear();
        graphics.lineStyle(2, 0xffffff, 1);

        curve.draw(graphics);

        //  Get the t value for 200 pixels along the curve
        const t = curve.getTFromDistance(200);

        //  Get the point at t
        const p = curve.getPoint(t);

        graphics.fillStyle(0xff0000, 1);
        graphics.fillCircle(p.x, p.y, 8);
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
