class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        const points = [];

        for (let k = 0; k < 150; k++)
        {
            points.push(new Phaser.Geom.Point());
        }

        let i = 0;

        this.input.on('pointermove', pointer =>
        {

            Phaser.Geom.Point.CopyFrom(pointer, points[i]);

            i = (i + 1) % points.length;

            graphics.clear();

            graphics.fillPointShape(pointer, 25);

            for (let j = 0; j < points.length; j++)
            {
                points[j].x += 4 + Math.abs(j - 75) / 15;

                graphics.fillPointShape(points[j], 25);
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
