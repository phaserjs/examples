class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00aaaa } });

        const pointerEllipse = new Phaser.Geom.Ellipse(400, 300, 400, 300);

        const ellipses = [];

        for (let k = 0; k < 30; k++)
        {
            ellipses.push(new Phaser.Geom.Ellipse(0, 0, 0, 0));
        }

        let i = 0;

        this.input.on('pointermove', pointer =>
        {

            pointerEllipse.setTo(pointer.x, pointer.y, pointer.x / 8, pointer.y / 6);

            Phaser.Geom.Ellipse.CopyFrom(pointerEllipse, ellipses[i]);

            i = (i + 1) % ellipses.length;

            graphics.clear();

            graphics.strokeEllipseShape(pointerEllipse);

            for (let j = 0; j < ellipses.length; j++)
            {

                ellipses[j].width *= 1.1;
                ellipses[j].height *= 1.1;

                graphics.strokeEllipseShape(ellipses[j]);

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
