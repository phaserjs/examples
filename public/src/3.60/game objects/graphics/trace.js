class Example extends Phaser.Scene
{
    points = [];

    preload ()
    {
        this.load.image('pic', 'assets/tests/sw.png');
    }

    create ()
    {
        this.add.image(0, 0, 'pic').setOrigin(0).setAlpha(0.8);

        const sketch = this.add.graphics();

        sketch.lineStyle(2, 0x00ff00);

        //  The graphics instance you draw on

        const graphics = this.add.graphics();

        const line = new Phaser.Geom.Line();

        this.input.on('pointerdown', pointer =>
        {

            line.setTo(pointer.x, pointer.y, pointer.x, pointer.y);

        });

        this.input.on('pointerup', pointer =>
        {

            sketch.strokeLineShape(line);

            graphics.clear();

        });

        this.input.on('pointermove', pointer =>
        {

            if (!pointer.isDown)
            {
                return;
            }

            line.x2 = pointer.x;
            line.y2 = pointer.y;

            graphics.clear();

            graphics.lineStyle(2, 0x00ff00);

            graphics.strokeLineShape(line);

        });

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
