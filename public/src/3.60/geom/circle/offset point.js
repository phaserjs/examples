class Example extends Phaser.Scene
{
    create ()
    {
        const circle = new Phaser.Geom.Circle(50, 300, 50);

        const graphics = this.add.graphics({ lineStyle: { color: 0x00ff00 } });
        graphics.strokeCircleShape(circle);

        const point = new Phaser.Geom.Point(Math.cos(Math.PI / 4) * 100, Math.sin(Math.PI / 4) * 100);

        for (let i = 0; i < 10; i++)
        {
            Phaser.Geom.Circle.OffsetPoint(circle, point);

            graphics.strokeCircleShape(circle);

            point.y *= -1;
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
