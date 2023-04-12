class Example extends Phaser.Scene
{
    sprite;
    point;
    rect;
    graphics;

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

        this.sprite = this.add.sprite(500, 100, 'mushroom');

        this.rect = new Phaser.Geom.Rectangle(350, 300, 200, 128);
        this.point = new Phaser.Geom.Rectangle(0, 0, 8, 8);

        this.input.on('pointermove', (pointer) =>
        {

            this.sprite.setPosition(pointer.worldX, pointer.worldY);

        });
    }

    update ()
    {
        const angle = Phaser.Math.Angle.Between(this.sprite.x, this.sprite.y, this.rect.centerX, this.rect.centerY);

        Phaser.Geom.Rectangle.PerimeterPoint(this.rect, Phaser.Math.RadToDeg(angle) + 180, this.point);

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
