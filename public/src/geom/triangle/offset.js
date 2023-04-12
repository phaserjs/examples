class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 } });

        const triangle = Phaser.Geom.Triangle.BuildEquilateral(100, 225, 150);

        for (let angle = 0; triangle.left < 800; angle += Math.PI / 18)
        {

            graphics.strokeTriangleShape(triangle);

            Phaser.Geom.Triangle.Offset(triangle, 20, Math.cos(angle) * 40);
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
