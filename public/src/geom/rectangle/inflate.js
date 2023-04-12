class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        const rect = new Phaser.Geom.Rectangle(200, 200, 128, 128);

        //  The green rectangle is the original one
        graphics.strokeRectShape(rect);

        Phaser.Geom.Rectangle.Inflate(rect, 128, 128);

        //  Draw the now inflated rectangle in yellow
        graphics.lineStyle(2, 0xffff00);

        graphics.strokeRectShape(rect);
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
