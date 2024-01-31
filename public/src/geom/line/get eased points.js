class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0xff0000 }});

        const line = new Phaser.Geom.Line(100, 100, 600, 500);

        graphics.lineStyle(2, 0x00ff00);
        graphics.strokeLineShape(line);

        const points = Phaser.Geom.Line.GetEasedPoints(line, 'sine.inout', 32);

        for (let i = 0; i < points.length; i++)
        {
            const p = points[i];

            graphics.fillRect(p.x - 2, p.y - 2, 4, 4);
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
