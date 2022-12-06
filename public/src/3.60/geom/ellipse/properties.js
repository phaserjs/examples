class Example extends Phaser.Scene
{
    create ()
    {
        const ellipse = new Phaser.Geom.Ellipse(400, 300, 250, 150);

        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00aaaa } });
        graphics.strokeEllipseShape(ellipse);

        graphics.lineStyle(2, 0x00aa00);
        graphics.lineBetween(ellipse.x, ellipse.y, ellipse.right, ellipse.bottom);

        graphics.strokeRect(ellipse.left, ellipse.top, ellipse.width, ellipse.height);
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
