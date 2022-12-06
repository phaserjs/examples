class Example extends Phaser.Scene
{
    create ()
    {
        const line = new Phaser.Geom.Line(330, 150, 430, 170);

        const graphics = this.add.graphics({ lineStyle: { width: 3, color: 0xaa00aa } });

        graphics.strokeLineShape(line);

        const angleStep = 1 / 15 * Phaser.Math.PI2;

        for (let i = 0; i < 15; i++)
        {
            const angle = i * angleStep;

            const xOffset = Math.cos(angle) * 50;
            const yOffset = Math.sin(angle) * 50;

            Phaser.Geom.Line.Rotate(line, angleStep);

            Phaser.Geom.Line.Offset(line, xOffset, yOffset);

            graphics.strokeLineShape(line);
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
