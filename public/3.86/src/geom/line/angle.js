class Example extends Phaser.Scene
{
    text;
    line;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        this.line = new Phaser.Geom.Line(200, 300, 600, 300);

        this.text = this.add.text(100, 50, '');
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.line, 0.02);

        this.graphics.clear();

        this.graphics.strokeLineShape(this.line);

        const angle = Phaser.Geom.Line.Angle(this.line);

        this.text.setText(`Line Angle: ${Phaser.Math.RadToDeg(angle)}`);
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
