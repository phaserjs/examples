class Example extends Phaser.Scene
{
    normal;
    line;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 3, color: 0xaa00aa, alpha: 0.6 } });

        this.line = new Phaser.Geom.Line(390, 300, 410, 300);

        // if we omit a parameter, new Point instance will be created and returned
        this.normal = Phaser.Geom.Line.GetNormal(this.line);
    }

    update ()
    {
        if (this.line.y2 > -150)
        {
            this.graphics.strokeLineShape(this.line);

            // normal is a directly perpendicular vector to supplied line

            // this moves the second line point 15px away in perpendicular direction

            this.line.x2 += this.normal.x * 15;
            this.line.y2 += this.normal.y * 15;

            // we can also supply an instance of Point that will be modified
            Phaser.Geom.Line.GetNormal(this.line, this.normal);
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
