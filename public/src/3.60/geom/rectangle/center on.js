class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x0000aa } });

        const rect = new Phaser.Geom.Rectangle(400, 300, 1, 1);

        let angle = 0;
        let radius = 1;

        for (let i = 0; i < 73; i++)
        {
            rect.setSize(rect.width + 1);

            const spiralX = 400 + Math.cos(angle) * radius;
            const spiralY = 300 + Math.sin(angle) * radius;

            Phaser.Geom.Rectangle.CenterOn(rect, spiralX, spiralY);

            graphics.fillRectShape(rect);

            radius += 4;
            angle += rect.width / radius;
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
