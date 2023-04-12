class Example extends Phaser.Scene
{
    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 3, color: 0x2266aa } });

        this.point = new Phaser.Math.Vector2(250, -250);

        this.input.on('pointermove', pointer =>
        {
            //  Set relative to center
            this.point.x = pointer.x - 400;
            this.point.y = pointer.y - 300;

            this.redraw();
        });

        this.redraw();
    }

    redraw ()
    {
        this.graphics.clear();

        this.graphics.lineBetween(400, 300, 400 + this.point.x, 300 + this.point.y);

        // rotates the point around 0/0 at 90 degrees towards right
        // the result is a vector perpendicular to the original vector
        this.point.normalizeRightHand();

        this.graphics.lineStyle(2, 0x00aa00);
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
