class Example extends Phaser.Scene
{
    t = 0;
    rotateY = 250;
    rotateX = 350;
    triangle;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 }, fillStyle: { color: 0x0000aa } });

        this.triangle = new Phaser.Geom.Triangle.BuildRight(200, 360, 200, 200);
    }

    update ()
    {
        this.graphics.clear();

        this.t += 0.01;

        Phaser.Geom.Triangle.RotateAroundXY(this.triangle, this.rotateX, this.rotateY, Math.sin(this.t) * 0.05);

        this.graphics.strokeTriangleShape(this.triangle);

        this.graphics.fillPoint(this.rotateX, this.rotateY, 4);
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
