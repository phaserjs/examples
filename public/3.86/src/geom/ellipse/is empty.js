class Example extends Phaser.Scene
{
    ellipses;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { color: 0x00aaaa }, fillStyle: { color: 0x00aaaa }});

        this.ellipses = [];

        for (let y = 0; y < 5; y++)
        {
            for (let x = 0; x < 5; x++)
            {
                const relativeSize = Math.random() * 2 - 1;

                const ellipse = new Phaser.Geom.Ellipse(80 + x * 160, 60 + y * 120, relativeSize * 160, relativeSize * 120);

                this.ellipses.push(ellipse);
            }
        }
    }

    update ()
    {
        this.graphics.clear();

        for (let i = 0; i < this.ellipses.length; i++)
        {
            const ellipse = this.ellipses[i];

            ellipse.width += 0.8;
            ellipse.height += 0.6;

            if (ellipse.width >= 160 || ellipse.height >= 120)
            {
                ellipse.setSize(-160, -120);
            }

            if (!ellipse.isEmpty())
            {
                this.graphics.fillEllipseShape(ellipse);
            }
            else
            {
                this.graphics.strokeEllipseShape(ellipse);
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
