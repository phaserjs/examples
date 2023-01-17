class Example extends Phaser.Scene
{
    index = 0;
    points;
    graphics;
    rect;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000ff }, fillStyle: { color: 0xff0000 }});

        this.rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);

        this.points = [];

        for (let i = 0; i < 25; i++)
        {
            // if we omit a parameter, new Point instance will be created and returned
            this.points.push(this.rect.getRandomPoint());
        }
    }

    update ()
    {
        this.index = ++this.index % 25;

        // we can also supply an instance of Point that will be modified
        this.rect.getRandomPoint(this.points[this.index]);

        this.graphics.clear();
        this.graphics.strokeRectShape(this.rect);

        for (let i = 0; i < 25; i++)
        {
            const p = this.points[i];
            this.graphics.fillCircle(p.x, p.y, 4);
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
