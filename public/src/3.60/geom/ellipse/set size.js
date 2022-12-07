class Example extends Phaser.Scene
{
    create ()
    {
        const ellipse = new Phaser.Geom.Ellipse(400, 300);

        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00aaaa } });

        for (let i = 0; i < 26; i++)
        {
            ellipse.setSize(i * 32, i * 24);

            // stroke with increasing smoothness
            graphics.strokeEllipseShape(ellipse, 32 + i);
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
