class Example extends Phaser.Scene
{
    create ()
    {
        const rect = new Phaser.Geom.Rectangle(0, 0, 8, 6);

        const graphics = this.add.graphics({ lineStyle: { color: 0x0000ff } });

        graphics.strokeRectShape(rect);

        for (let i = 0; i < 11; i++)
        {
            rect.setTo(rect.centerX, rect.centerY, rect.width * 1.4, rect.height * 1.4);

            graphics.strokeRectShape(rect);
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
