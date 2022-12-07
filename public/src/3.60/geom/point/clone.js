class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x2266aa } });

        let point = new Phaser.Geom.Point(400, 275);
        const points = [];

        let angle = 0;
        let length = 1;

        while (point.y < 600)
        {
            length += 0.05 / length;
            angle += 0.05;

            point = Phaser.Geom.Point.Clone(point);

            point.x += Math.cos(angle) * length;
            point.y += Math.sin(angle) * length;

            points.push(point);
        }

        graphics.strokePoints(points);
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
