class Example extends Phaser.Scene
{
    create ()
    {
        const line = new Phaser.Geom.Line(100, 500, 700, 100);

        const graphics = this.add.graphics({ lineStyle: { width: 4, color: 0xaa00aa } });

        graphics.strokeLineShape(line);
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
