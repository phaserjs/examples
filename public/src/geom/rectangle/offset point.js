class Example extends Phaser.Scene
{
    rect;
    point;
    step = 0.5;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x0000aa } });

        this.rect = new Phaser.Geom.Rectangle(395, 295, 10, 10);

        this.point = new Phaser.Geom.Point(7, 7);
    }

    update ()
    {
        if (this.rect.y < 600)
        {
            this.graphics.fillRectShape(this.rect);

            Phaser.Geom.Rectangle.OffsetPoint(this.rect, this.point);

            Phaser.Math.Rotate(this.point, this.step);

            this.step *= 0.995;
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
