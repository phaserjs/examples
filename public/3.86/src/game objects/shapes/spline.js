class Example extends Phaser.Scene
{
    create ()
    {
        const startPoint = new Phaser.Math.Vector2(0, 300);
        const controlPoint1 = new Phaser.Math.Vector2(100, 100);
        const controlPoint2 = new Phaser.Math.Vector2(200, 100);
        const endPoint = new Phaser.Math.Vector2(300, 300);

        const curve = new Phaser.Curves.Spline([
            100, 500,
            260, 450,
            300, 250,
            550, 145,
            745, 256
        ]);

        const r = this.add.curve(400, 300, curve);

        r.setStrokeStyle(2, 0xff0000);

        // r.setAlpha(0.5);
        // r.setAngle(20);
        // r.setOrigin(1);

        this.input.on('pointermove', pointer =>
        {

            r.x = pointer.x;
            r.y = pointer.y;

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
