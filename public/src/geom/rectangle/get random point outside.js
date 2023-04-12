class Example extends Phaser.Scene
{
    graphics;
    rectInner;
    rectOuter;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x00ff00 }, fillStyle: { color: 0xff00ff }});

        this.rectOuter = new Phaser.Geom.Rectangle(50, 100, 600, 450);
        this.rectInner = new Phaser.Geom.Rectangle(250, 200, 300, 200);

        this.plotRandomPoints();

        this.time.addEvent({ delay: 1000, callback: () => this.plotRandomPoints, loop: true });
    }

    plotRandomPoints ()
    {
        this.graphics.clear();
        this.graphics.strokeRectShape(this.rectOuter);
        this.graphics.strokeRectShape(this.rectInner);

        for (let i = 0; i < 400; i++)
        {
            const p = Phaser.Geom.Rectangle.RandomOutside(this.rectOuter, this.rectInner);

            this.graphics.fillRect(p.x, p.y, 2, 2);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
