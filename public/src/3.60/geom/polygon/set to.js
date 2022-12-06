class Example extends Phaser.Scene
{
    graphics;
    angle = 0;
    radius = 100;
    points;
    polygon;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa6622 } });

        this.polygon = new Phaser.Geom.Polygon();

        this.points = [];
    }

    update ()
    {
        if (this.angle <= Math.PI * 2)
        {
            this.angle += Math.PI / 30;
            const leafSize = 150 * Math.sin((this.angle * 2) % Math.PI);

            this.points.push(400 + Math.cos(this.angle) * (this.radius + leafSize));
            this.points.push(300 + Math.sin(this.angle) * (this.radius + leafSize));

            this.polygon.setTo(this.points);

            this.graphics.clear();

            this.graphics.strokePoints(this.polygon.points);
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
