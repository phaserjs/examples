class Example extends Phaser.Scene
{
    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        this.points = [];

        this.angle = 0;

        for (let i = 0; i <= 800 / 5; i++)
        {
            this.points.push(new Phaser.Math.Vector2(i * 5));
        }
    }

    update ()
    {
        this.graphics.clear();

        this.angle += 0.05;

        for (let i = 0; i < this.points.length; i++)
        {
            if (this.points[i].x > 0)
            {
                this.points[i].x -= 5;
                this.points[i].y -= Math.sin(this.angle + this.points[i].x / 400 * Math.PI) * 3;
            }
            else
            {
                this.points[i].setTo(800, Math.sin(this.angle) * 150 + 300);
            }

            this.graphics.fillPointShape(this.points[i], 7);
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
