class Example extends Phaser.Scene
{
    t = 0;
    triangle;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 } });

        this.triangle = new Phaser.Geom.Triangle.BuildRight(300, 360, 300, 300);
    }

    update ()
    {
        this.graphics.clear();

        this.t += 0.01;

        Phaser.Geom.Triangle.Rotate(this.triangle, Math.sin(this.t) * 0.04);

        this.graphics.strokeTriangleShape(this.triangle);
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
