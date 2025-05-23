class Example extends Phaser.Scene
{
    circles;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics({ lineStyle: { color: 0x00ff00 }, fillStyle: { color: 0x00ff00 }});

        this.circles = [];

        for (let y = 0; y < 6; y++)
        {
            for (let x = 0; x < 8; x++)
            {
                this.circles.push(new Phaser.Geom.Circle(50 + x * 100, 50 + y * 100, Phaser.Math.Between(-50, 50)));
            }
        }
    }

    update ()
    {
        this.graphics.clear();

        for (let i = 0; i < this.circles.length; i++)
        {
            const circle = this.circles[i];

            circle.radius += 0.5;
            if (circle.radius >= 50)
            {
                circle.radius -= 100;
            }

            if (!circle.isEmpty())
            {
                this.graphics.fillCircleShape(circle);
            }
            else
            {
                this.graphics.strokeCircleShape(circle);
            }
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
