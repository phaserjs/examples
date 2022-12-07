class Example extends Phaser.Scene
{
    t = 0.5;
    interpolatedPoint;
    point2;
    point1;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 3, color: 0x2266aa }, fillStyle: { color: 0x2266aa } });

        this.point1 = new Phaser.Geom.Point(400, 300);

        this.point2 = new Phaser.Geom.Point(550, 300);

        this.interpolatedPoint = Phaser.Geom.Point.Interpolate(this.point1, this.point2, this.t);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Point.CopyFrom(pointer, this.point2);

        });
    }

    update ()
    {
        this.graphics.clear();

        this.t = (this.t + 0.01) % 1;

        Phaser.Geom.Point.Interpolate(this.point1, this.point2, this.t, this.interpolatedPoint);

        this.graphics.fillPointShape(this.point1, 20);
        this.graphics.fillPointShape(this.point2, 20);

        this.graphics.fillStyle(0x00aa00);
        this.graphics.fillPointShape(this.interpolatedPoint, 20);

        this.graphics.lineBetween(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
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
