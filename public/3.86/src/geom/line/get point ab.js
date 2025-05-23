class Example extends Phaser.Scene
{
    graphics;
    line;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa00aa } });

        this.line = new Phaser.Geom.Line(250, 300, 550, 300);
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.line, 0.02);

        this.graphics.clear();

        this.graphics.strokeLineShape(this.line);

        this.graphics.fillStyle(0xaa0000);
        this.graphics.fillPointShape(this.line.getPointA(), 10);

        this.graphics.fillStyle(0x0000aa);
        this.graphics.fillPointShape(this.line.getPointB(), 10);
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
