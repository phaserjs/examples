class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });

        const triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);

        graphics.strokeTriangleShape(triangle);
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
