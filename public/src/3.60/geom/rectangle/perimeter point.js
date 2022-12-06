class Example extends Phaser.Scene
{
    a = 0;
    point;
    rect;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        this.rect = new Phaser.Geom.Rectangle(32, 32, 256, 256);
        this.point = new Phaser.Geom.Rectangle(0, 0, 8, 8);
    }

    update ()
    {
        this.a++;

        Phaser.Geom.Rectangle.PerimeterPoint(this.rect, this.a, this.point);

        this.graphics.clear();

        this.graphics.strokeRectShape(this.rect);

        this.graphics.fillRect(this.point.x - 4, this.point.y - 4, this.point.width, this.point.height);

        //  Draw a line from the center of the rect to the point on the perimeter

        this.graphics.lineStyle(2, 0xffffff);
        this.graphics.beginPath();
        this.graphics.moveTo(this.rect.centerX, this.rect.centerY);
        this.graphics.lineTo(this.point.x, this.point.y);
        this.graphics.closePath();
        this.graphics.strokePath();
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
