class Example extends Phaser.Scene
{
    palette;
    graphics;
    inc = 0;
    time = 0;

    create ()
    {
        this.graphics = this.add.graphics({ x: 400, y: 300 });

        this.palette = [ 0, 1911635, 8267091, 34641, 11227702, 6248271, 12764103, 16773608, 16711757, 16753408, 16772135, 58422, 2731519, 8615580, 16742312, 16764074 ];
    }

    update ()
    {
        this.time += 0.03;

        this.time = Phaser.Math.Wrap(this.time, -32765, 32765);

        this.graphics.clear();

        const f = this.time / 9;
        const n = 650 + 60 * this.sin(f / 3);

        for (let i = 1; i < n; i++)
        {
            let a = f + Math.random();
            let d = 0.3 + Math.random() * 2;
            let y = -2;

            if (i > 400)
            {
                const j = i - 400;
                y = j * 2 / n - 1;
                a = j * 40 / n + f + j / 3;
                d = j * 3 / n;
            }

            let x = d * this.cos(a);
            const z = 2 + this.cos(f) + d * this.sin(a);

            x = 64 + x * 64 / z;
            y = 64 + y * 64 / z;

            const c = 6 + i % 5;
            const e = 5 / z;

            if (z > 0.1)
            {
                this.graphics.fillStyle(this.palette[c]);

                if (i > 400)
                {
                    this.graphics.fillCircle(x, y, e);
                }
                else
                {
                    this.graphics.fillRect(x, y, e, e);
                }

                // graphics.fillStyle(palette[c / 4]);
                // graphics.fillCircle(x, 128 - y, e);
            }

        }

    }

    cos (f)
    {
        return Math.cos(f * (Math.PI * 2));
    }

    sin (f)
    {
        return Math.sin(f * (Math.PI * 2));
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
