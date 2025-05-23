class Example extends Phaser.Scene
{
    index = 0;
    points;
    graphics;
    circle;

    create ()
    {
        this.circle = new Phaser.Geom.Circle(400, 300, 250);

        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        this.points = [];

        for (let i = 0; i < 25; i++)
        {
            // if we omit a parameter, new Point instance will be created and returned
            this.points.push(this.circle.getRandomPoint());
        }
    }

    update ()
    {
        this.index = ++this.index % 25;

        // we can also supply an instance of Point that will be modified
        this.circle.getRandomPoint(this.points[this.index]);

        this.graphics.clear();
        this.graphics.strokeCircleShape(this.circle);

        for (let i = 0; i < 25; i++)
        {
            const p = this.points[i];
            this.graphics.fillRect(p.x - 4, p.y - 4, 8, 8);
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
