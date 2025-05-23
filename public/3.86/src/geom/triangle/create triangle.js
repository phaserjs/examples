class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 } });

        const triangle = new Phaser.Geom.Triangle(400, 100, 100, 500, 700, 500);

        // graphics.strokeTriangleShape(triangle);

        graphics.fillTriangleShape(triangle);
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
