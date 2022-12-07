class Example extends Phaser.Scene
{
    create ()
    {
        const circle = new Phaser.Geom.Circle(10, 10, 10);

        const graphics = this.add.graphics({ lineStyle: { color: 0x00ff00 } });
        graphics.strokeCircleShape(circle);

        for (let i = 0; i < 38; i++)
        {
            circle.setTo(circle.x + 10, circle.y + 10, circle.radius + 10);
            graphics.strokeCircleShape(circle);
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
