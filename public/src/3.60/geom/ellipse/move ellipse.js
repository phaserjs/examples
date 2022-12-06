class Example extends Phaser.Scene
{
    create ()
    {
        const ellipse = new Phaser.Geom.Ellipse(400, 300, 300, 100);

        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } }).strokeEllipseShape(ellipse, 64);

        this.input.on('pointermove', pointer =>
        {
        
            ellipse.x = pointer.x;
            ellipse.y = pointer.y;

            //  Redraw it
            graphics.clear();
            graphics.strokeEllipseShape(ellipse, 64);
        
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
