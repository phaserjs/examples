class Example extends Phaser.Scene
{
    create ()
    {
        const rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);

        const graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });

        graphics.fillRectShape(rect);
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
