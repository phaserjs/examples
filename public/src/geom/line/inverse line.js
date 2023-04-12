class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        const line = new Phaser.Geom.Line();

        this.input.on('pointerdown', pointer =>
        {

            line.setTo(pointer.x, pointer.y, pointer.x, pointer.y);

            graphics.clear();
            graphics.lineStyle(4, 0xaa00aa);
            graphics.strokeLineShape(line);

        });

        this.input.on('pointermove', pointer =>
        {

            if (pointer.isDown)
            {
                line.x2 = pointer.x;
                line.y2 = pointer.y;
        
                graphics.clear();
                graphics.lineStyle(4, 0xaa00aa);
                graphics.strokeLineShape(line);
            }

        });

        this.input.on('pointerup', pointer =>
        {

            Phaser.Geom.Line.RotateAroundPoint(line, line.getPointA(), Math.PI);

            graphics.clear();
            graphics.lineStyle(4, 0x00ff00);
            graphics.strokeLineShape(line);

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
