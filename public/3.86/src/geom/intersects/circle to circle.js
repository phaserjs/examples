class Example extends Phaser.Scene
{
    a = 0;
    pointerCircle;
    circle;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0xaa0000} });

        this.circle = new Phaser.Geom.Circle(0, 0, 120);

        this.pointerCircle = new Phaser.Geom.Circle(400, 300, 60);

        this.input.on('pointermove', pointer =>
        {

            this.pointerCircle.x = pointer.x;
            this.pointerCircle.y = pointer.y;

        });
    }

    update ()
    {
        this.a += 0.015;

        if (this.a > Math.PI * 4)
        {
            this.a -= Math.PI * 4;
        }

        this.circle.x = 400 - Math.cos(this.a / 2) * 400;
        this.circle.y = 300 - Math.sin(this.a * 2) * 300;

        this.graphics.clear();
        this.graphics.fillCircleShape(this.circle);

        if (Phaser.Geom.Intersects.CircleToCircle(this.circle, this.pointerCircle))
        {
            this.graphics.lineStyle(4, 0xaa0000);
        }
        else
        {
            this.graphics.lineStyle(4, 0x00aa00);
        }

        this.graphics.strokeCircleShape(this.pointerCircle);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
