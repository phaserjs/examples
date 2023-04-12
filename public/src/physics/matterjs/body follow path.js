class Example extends Phaser.Scene
{
    tempLine = new Phaser.Geom.Line();
    duration = 5000;
    t = -1;
    block;
    curve;

    preload ()
    {
        this.load.image('block', 'assets/sprites/flower-exo.png');
    }

    create ()
    {
        const graphics = this.add.graphics();

        // let line = new Phaser.Geom.Line(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500));

        let line = new Phaser.Geom.Line(100, 500, 700, 100);

        // graphics.fillStyle(0xff0000, 1);
        // graphics.fillCircle(line.x1, line.y1, 8);
        // graphics.fillStyle(0xff00ff, 1);
        // graphics.fillCircle(line.x2, line.y2, 8);

        let points = [];

        points.push(line.getPointA());

        const length = Phaser.Geom.Line.Length(line);
        const waves = Math.ceil(length / 200);

        let vx = 100;
        let vy = 100;
        let prevX = line.x1;
        let prevY = line.y1;

        for (let i = 1; i <= waves; i++)
        {
            let currentPoint = line.getPoint(i / waves);

            // graphics.fillStyle(0xffff00).fillCircle(currentPoint.x, currentPoint.y, 4);

            let ray = new Phaser.Geom.Line(prevX, prevY, currentPoint.x, currentPoint.y);

            // graphics.lineStyle(1, 0xffffff).strokeLineShape(ray);

            let normal = Phaser.Geom.Line.GetNormal(ray);
            let midPoint = Phaser.Geom.Line.GetMidPoint(ray);

            // graphics.fillStyle(0x00ff00).fillCircle(midPoint.x + normal.x * vx, midPoint.y + normal.y * vy, 4);

            points.push(new Phaser.Math.Vector2(midPoint.x + normal.x * vx, midPoint.y + normal.y * vy));

            prevX = currentPoint.x;
            prevY = currentPoint.y;

            vx *= -1;
            vy *= -1;
        }

        points.push(line.getPointB());

        this.curve = new Phaser.Curves.Spline(points);

        graphics.lineStyle(1, 0xffffff, 1);
        this.curve.draw(graphics, 64);

        this.block = this.matter.add.image(line.x1, line.y1, 'block');

        this.block.setFriction(0);
        this.block.setFrictionAir(0);
        this.block.setBounce(0);

        this.input.once('pointerdown', () =>
        {
            this.t = 0;
        }, this);
    }

    update (time, delta)
    {
        if (this.t === -1)
        {
            return;
        }

        this.t += delta;

        if (this.t >= this.duration)
        {
            //  Reached the end
            this.block.setVelocity(0, 0);
        }
        else
        {
            const d = (this.t / this.duration);

            const p = this.curve.getPoint(d);

            this.block.setPosition(p.x, p.y);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
