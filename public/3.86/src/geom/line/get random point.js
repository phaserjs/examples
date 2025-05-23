class Example extends Phaser.Scene
{
    index = 0;
    points;
    graphics;
    line;

    create ()
    {
        this.line = new Phaser.Geom.Line(100, 500, 700, 100);

        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xff00ff }, fillStyle: { color: 0xff0000 }});

        this.points = [];

        for (let i = 0; i < 25; i++)
        {
            // if we omit a parameter, new Point instance will be created and returned
            this.points.push(this.line.getRandomPoint());
        }
    }

    update ()
    {
        this.index = ++this.index % 25;

        // we can also supply an instance of Point that will be modified
        this.line.getRandomPoint(this.points[this.index]);

        this.graphics.clear();
        this.graphics.strokeLineShape(this.line);

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
