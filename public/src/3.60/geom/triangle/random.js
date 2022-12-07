class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xffff00 } });

        const triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);

        graphics.strokeTriangleShape(triangle);

        //  Draw random points within it
        for (let i = 0; i < 200; i++)
        {
            const p = Phaser.Geom.Triangle.Random(triangle);

            graphics.fillPointShape(p, 2);
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
