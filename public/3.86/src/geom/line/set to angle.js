class Example extends Phaser.Scene
{
    create ()
    {

        const graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        const line = new Phaser.Geom.Line(380, 300, 420, 300);

        let length = 40;

        for (let i = 0; i < 30; i++)
        {
            graphics.strokeLineShape(line);

            const normalAngle = Phaser.Geom.Line.NormalAngle(line);

            Phaser.Geom.Line.SetToAngle(line, line.x2, line.y2, normalAngle, length);

            length += 20;
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
