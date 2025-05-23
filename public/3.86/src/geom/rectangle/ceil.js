class Example extends Phaser.Scene
{
    y = 0;
    graphics;
    rect2;
    rect1;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x0000aa } });

        this.rect1 = new Phaser.Geom.Rectangle(100, 0, 250, 100);
        this.rect2 = new Phaser.Geom.Rectangle(450, 0, 250, 100);
    }

    update ()
    {
        this.y += 0.05;

        this.rect1.y = this.rect2.y = this.y;

        Phaser.Geom.Rectangle.Ceil(this.rect2);

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
