class Example extends Phaser.Scene
{
    ellipses;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { color: 0x00aaaa } });

        let ellipse = new Phaser.Geom.Ellipse(400, 300, 0, 0);

        this.ellipses = [ ellipse ];

        for (let i = 0; i < 80; i++)
        {
            ellipse = Phaser.Geom.Ellipse.Clone(ellipse);
            ellipse.width += 1.5;
            ellipse.height += 0.7;

            Phaser.Geom.Ellipse.CircumferencePoint(ellipse, i / 20 * Phaser.Math.PI2, ellipse);

            this.ellipses.push(ellipse);
        }
    }

    update ()
    {
        this.graphics.clear();

        for (let i = 0; i < this.ellipses.length; i++)
        {
            this.ellipses[i].width += 1.5;
            this.ellipses[i].height += 0.7;

            if (this.ellipses[i].width > 800)
            {
                this.ellipses[i].width = 0;
                this.ellipses[i].height = 0;
            }

            this.graphics.strokeEllipseShape(this.ellipses[i]);
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
