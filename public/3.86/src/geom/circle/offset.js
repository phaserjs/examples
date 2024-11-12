class Example extends Phaser.Scene
{
    create ()
    {
        const circle = new Phaser.Geom.Circle(350, 150, 50);

        const graphics = this.add.graphics({ lineStyle: { color: 0x00ff00 } });
        graphics.strokeCircleShape(circle);

        for (let i = 0; i < 10; i++)
        {
            const angle = i / 10 * Phaser.Math.PI2;

            const xOffset = Math.cos(angle) * circle.diameter;
            const yOffset = Math.sin(angle) * circle.diameter;

            Phaser.Geom.Circle.Offset(circle, xOffset, yOffset);

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
