class Example extends Phaser.Scene
{
    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 3, color: 0x2266aa } });

        this.point = new Phaser.Math.Vector2(Math.random() - 0.5, Math.random() - 0.5);

        this.input.on('pointermove', pointer =>
        {
            this.point.copy(pointer);

            //  Set relative to center
            this.point.x -= 400;
            this.point.y -= 300;

            this.redraw();
        });

        this.redraw();
    }

    redraw ()
    {
        this.graphics.clear();

        this.point.setLength(250);

        this.graphics.lineBetween(400, 300, 400 + this.point.x, 300 + this.point.y);
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
