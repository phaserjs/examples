class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        const circle = new Phaser.Geom.Circle(400, 300, 170);

        const points = circle.getPoints(32);

        for (let i = 0; i < points.length; i++)
        {
            const p = points[i];

            graphics.fillRect(p.x - 4, p.y - 4, 8, 8);
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
