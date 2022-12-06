class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaa0000 }, fillStyle: { color: 0x0000aa } });

        const rect = new Phaser.Geom.Rectangle();

        const square = new Phaser.Geom.Rectangle();

        this.input.on('pointermove', pointer =>
        {

            graphics.clear();

            rect.width = pointer.x;
            rect.height = pointer.y;

            const area = Phaser.Geom.Rectangle.Area(rect);

            square.width = square.height = Math.sqrt(area);

            graphics.fillRectShape(square);

            graphics.strokeRectShape(rect);

        });
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
