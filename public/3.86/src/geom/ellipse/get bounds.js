class Example extends Phaser.Scene
{
    a = 0;
    graphics;
    bounds;
    ellipse;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0x00aaaa }});

        this.ellipse = new Phaser.Geom.Ellipse(400, 300, 250, 150);

        // if we omit the out parameter, we get a new Rectangle instance
        this.bounds = Phaser.Geom.Ellipse.GetBounds(this.ellipse);
    }

    update ()
    {
        this.a += 0.01;

        if (this.a > Math.PI * 4)
        {
            this.a -= Math.PI * 4;
        }

        this.ellipse.x = 400 - Math.cos(this.a / 2) * 300;
        this.ellipse.y = 300 - Math.sin(this.a * 2) * 200;
        this.ellipse.width = Math.sin(this.a) * Math.sin(this.a) * 300;
        this.ellipse.height = Math.cos(this.a) * Math.sin(this.a) * 300;

        // or we can supply a Rectangle instance to modify
        Phaser.Geom.Ellipse.GetBounds(this.ellipse, this.bounds);

        this.graphics.clear();

        this.graphics.fillEllipseShape(this.ellipse);

        this.graphics.strokeRectShape(this.bounds);
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
