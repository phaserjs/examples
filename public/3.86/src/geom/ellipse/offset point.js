class Example extends Phaser.Scene
{
    ellipse;
    point;
    step = 0.5;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x00aaaa } });

        this.ellipse = new Phaser.Geom.Ellipse(380, 280, 20, 0);

        this.point = new Phaser.Geom.Point(20, 0);
    }

    update ()
    {
        if (this.ellipse.y < 600)
        {
            this.graphics.fillEllipseShape(this.ellipse);

            Phaser.Geom.Ellipse.OffsetPoint(this.ellipse, this.point);

            Phaser.Math.Rotate(this.point, this.step);

            this.ellipse.width = this.point.x;
            this.ellipse.height = this.point.y;

            this.step *= 0.996;
        }
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
