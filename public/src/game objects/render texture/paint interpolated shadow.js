class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush2.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(400, 300, 800, 600);

        const brush = this.textures.getFrame('brush');

        const hsv = Phaser.Display.Color.HSVColorWheel();
        let i = 0;

        this.input.on('pointermove', pointer =>
        {

            if (pointer.isDown)
            {
                const points = pointer.getInterpolatedPosition(30);
                let first = false;
                let color;

                points.forEach(p =>
                {

                    if (!first)
                    {
                        color = 0x000000;
                        first = true;
                    }
                    else
                    {
                        color = hsv[i].color;
                    }

                    rt.draw(brush, p.x - 16, p.y - 16, 1, color);

                });

                i++;

                if (i === 360)
                {
                    i = 0;
                }
            }

        }, this);

        this.input.on('pointerdown', pointer =>
        {

            rt.draw(brush, pointer.x - 16, pointer.y - 16, 1, hsv[i].color);

            i++;

            if (i === 360)
            {
                i = 0;
            }

        }, this);

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cc9999',
    scene: Example
};

const game = new Phaser.Game(config);
