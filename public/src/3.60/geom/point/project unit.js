class Example extends Phaser.Scene
{
    angle = 0;
    projectedPoint;
    point2;
    point;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x2266aa }, fillStyle: { color: 0xaa0000 } });

        // ProjectUnit assumes normalized point
        // i.e. it has magnitude of 1
        this.point = new Phaser.Geom.Point(1, 0);

        this.point2 = new Phaser.Geom.Point(250, 0);

        this.projectedPoint = Phaser.Geom.Point.ProjectUnit(this.point2, this.point);

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Point.CopyFrom(pointer, this.point2);

            this.point2.x -= 400;
            this.point2.y -= 300;
        });
    }

    update ()
    {
        this.graphics.clear();

        this.angle += 0.005;

        // unit vector
        this.point.setTo(Math.cos(this.angle), Math.sin(this.angle));

        // project a point on point2 on point
        Phaser.Geom.Point.ProjectUnit(this.point2, this.point, this.projectedPoint);

        // set magnitude to 250, because it's unit point, we can simply multiply
        this.point.x *= 250;
        this.point.y *= 250;

        // drawn from the center (as if center was 0/0)
        this.graphics.lineBetween(400, 300, 400 + this.point.x, 300 + this.point.y);

        // draw projecting point
        this.graphics.lineStyle(2, 0x00aa00);
        this.graphics.lineBetween(400, 300, 400 + this.point2.x, 300 + this.point2.y);

        // move relative to center
        this.projectedPoint.x += 400;
        this.projectedPoint.y += 300;

        this.graphics.fillPointShape(this.projectedPoint, 15);

        this.graphics.lineStyle(1, 0xaa0000);
        this.graphics.lineBetween(this.point2.x + 400, this.point2.y + 300, this.projectedPoint.x, this.projectedPoint.y);
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
