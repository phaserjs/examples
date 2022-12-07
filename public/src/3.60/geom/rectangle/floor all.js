class Example extends Phaser.Scene
{
    size = 50;
    y = 0;
    graphics;
    rect2;
    rect1;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x0000aa } });

        this.rect1 = new Phaser.Geom.Rectangle(100, 0, 50, 50);
        this.rect2 = new Phaser.Geom.Rectangle(450, 0, 50, 50);
    }

    update ()
    {
        this.y += 0.05;
        this.size += 0.05;

        this.rect1.y = this.rect2.y = this.y;
        this.rect1.setSize(this.size);
        this.rect2.setSize(this.size);

        Phaser.Geom.Rectangle.FloorAll(this.rect2);

        this.graphics.clear();
        this.graphics.fillRectShape(this.rect1);
        this.graphics.fillRectShape(this.rect2);
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
