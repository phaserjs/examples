class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 3, color: 0xaa00aa } });

        const pointerLine = new Phaser.Geom.Line(0, 0, 0, 200);

        const lines = [];

        for (let k = 0; k < 60; k++)
        {
            lines.push(new Phaser.Geom.Line(0, 0, 0, 0));
        }

        let i = 0;

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Line.CenterOn(pointerLine, pointer.x, pointer.y);

            Phaser.Geom.Line.CopyFrom(pointerLine, lines[i]);

            i = (i + 1) % lines.length;

            graphics.clear();

            graphics.strokeLineShape(pointerLine);

            for (let j = 0; j < lines.length; j++)
            {

                Phaser.Geom.Line.Rotate(lines[j], 0.2);

                graphics.strokeLineShape(lines[j]);

            }
        });
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
