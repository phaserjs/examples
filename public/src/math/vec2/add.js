class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        const point = new Phaser.Math.Vector2(0, 300);
        const point2 = new Phaser.Math.Vector2(0, 0);

        for (let angle = 0; point.x < 800; angle += Math.PI / 18)
        {
            graphics.fillPointShape(point, 20);

            point2.set(20, Math.cos(angle) * 40);

            point.add(point2);
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
