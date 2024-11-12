class Example extends Phaser.Scene
{
    create ()
    {
        const ellipse = new Phaser.Geom.Ellipse(400, 5, 10, 10);

        const graphics = this.add.graphics({ lineStyle: { color: 0x00aaaa } });
        graphics.strokeEllipseShape(ellipse);

        for (let i = 0; i < 37; i++)
        {
            ellipse.setTo(ellipse.x, ellipse.y + 19, ellipse.width + 12, ellipse.height + 6);
            graphics.strokeEllipseShape(ellipse);
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
