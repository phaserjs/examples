class Example extends Phaser.Scene
{
    direction = 1;
    rect;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { color: 0x0000ff }, fillStyle: { color: 0x0000ff }});

        this.rect = new Phaser.Geom.Rectangle(400, 300, 0, 0);
    }

    update ()
    {
        this.graphics.clear();

        this.rect.width += 2.4 * this.direction;
        this.rect.height += 1.8 * this.direction;

        if (this.rect.width * this.direction >= 200)
        {
            this.direction *= -1;
        }

        if (!this.rect.isEmpty())
        {
            this.graphics.fillRectShape(this.rect);
        }
        else
        {
            this.graphics.strokeRectShape(this.rect);
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
