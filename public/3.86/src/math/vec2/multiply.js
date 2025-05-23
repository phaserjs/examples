class Example extends Phaser.Scene
{
    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        this.input.on('pointermove', pointer =>
        {
            this.redraw(1.01 + pointer.x / 800, 1.01 + pointer.y / 600);
        });

        this.redraw(1.2, 1.2);
    }

    redraw (mulX, mulY)
    {
        this.graphics.clear();

        const point = new Phaser.Math.Vector2(8, 6);

        while (point.x < 800 && point.y < 600)
        {
            this.graphics.fillPointShape(point, 20);

            point.x *= mulX;
            point.y *= mulY;
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
