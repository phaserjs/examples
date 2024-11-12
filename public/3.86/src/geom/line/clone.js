class Example extends Phaser.Scene
{
    lines;
    line;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa, alpha: 0.6 } });

        this.line = new Phaser.Geom.Line(100, 300, 400, 300);

        this.lines = [];
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.line, 0.03);

        this.lines.push(Phaser.Geom.Line.Clone(this.line));

        this.graphics.clear();

        this.graphics.strokeLineShape(this.line);

        for (let i = 0; i < this.lines.length; i++)
        {
            Phaser.Geom.Line.Offset(this.lines[i], 3, 0);

            if (this.lines[i].left > 800)
            {
                this.lines.splice(i--, 1);
            }
            else
            {
                this.graphics.strokeLineShape(this.lines[i]);
            }

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
