class Example extends Phaser.Scene
{
    a = 0;
    point;
    circle;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x00ff00 } });

        this.circle = new Phaser.Geom.Circle(400, 300, 150);
        this.point = new Phaser.Geom.Rectangle(0, 0, 8, 8);
    }

    update ()
    {
        this.a += 0.04;

        if (this.a >= Phaser.Math.PI2)
        {
            this.a -= Phaser.Math.PI2;
        }

        Phaser.Geom.Circle.CircumferencePoint(this.circle, this.a, this.point);

        this.graphics.clear();
        this.graphics.fillRect(this.point.x - 4, this.point.y - 4, this.point.width, this.point.height);
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
