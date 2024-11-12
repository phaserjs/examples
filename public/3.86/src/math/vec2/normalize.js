class Example extends Phaser.Scene
{
    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 3, color: 0x2266aa } });

        this.point = new Phaser.Math.Vector2(250, 0);

        this.text = this.add.text(50, 50, '');

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

        // normalized point will always have a magnitude of 1
        this.point.normalize();

        this.text.setText('Normalized point: ' + this.point.x + '/' + this.point.y);

        // we can multiply it with desired length to get desired magnitude
        this.point.x *= 200;
        this.point.y *= 200;

        // this will always draw a line that's 200 px long
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
