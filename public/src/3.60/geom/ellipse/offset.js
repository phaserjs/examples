class Example extends Phaser.Scene
{
    create ()
    {
        const ellipse = new Phaser.Geom.Ellipse(320, 225, 170, 50);

        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00aaaa } });

        graphics.strokeEllipseShape(ellipse);

        for (let i = 0; i < 10; i++)
        {
            const angle = i / 10 * Phaser.Math.PI2;

            const xOffset = Math.cos(angle) * ellipse.width;
            const yOffset = Math.sin(angle) * ellipse.height;

            Phaser.Geom.Ellipse.Offset(ellipse, xOffset, yOffset);

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
