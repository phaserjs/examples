class Example extends Phaser.Scene
{
    create ()
    {
        //  Our ellipse is centered at 400x300 and is 600px wide by 300px tall
        const ellipse = new Phaser.Geom.Ellipse(400, 300, 600, 300);

        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });

        graphics.strokeEllipseShape(ellipse, 64);

        this.input.on('pointermove', pointer =>
        {
        
            ellipse.width = Math.abs(pointer.x - ellipse.x) * 2;
            ellipse.height = Math.abs(pointer.y - ellipse.y) * 2;

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
