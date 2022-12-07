class Example extends Phaser.Scene
{
    create ()
    {
        const rect = new Phaser.Geom.Rectangle();

        const graphics = this.add.graphics({ lineStyle: { color: 0x0000ff } });

        for (let i = 0; i < 34; i++)
        {
            rect.setSize(i * 24, i * 18);

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
