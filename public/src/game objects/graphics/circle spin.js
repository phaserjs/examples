class CircleSpin extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.timeInc = 0;
        this.graphics = undefined;
        this.palette = undefined;
    }

    create ()
    {
        this.graphics = this.add.graphics({ x: 400, y: 300 });

        this.palette = [ 0, 1911635, 8267091, 34641, 11227702, 6248271, 12764103, 16773608, 16711757, 16753408, 16772135, 58422, 2731519, 8615580, 16742312, 16764074 ];
    }

    cos (f)
    {
        return Math.cos(f * (Math.PI * 2));
    }

    sin (f)
    {
        return Math.sin(f * (Math.PI * 2));
    }

    update ()
    {
        console.log("update");
        console.log("timeInc", this.timeInc);

        this.timeInc += 0.03;

        this.timeInc = Phaser.Math.Wrap(this.timeInc, -32765, 32765);
        console.log("timeInc", this.timeInc);

        this.graphics.clear();

        let f = this.timeInc / 9;
        console.log("f", f);

        let n = 650 + 60 * this.sin(f / 3);
        console.log("n", n);
        for (let i = 1; i < n; i++)
        {
            let a = f + Math.random();
            let d = 0.3 + Math.random() * 2;
            let y = -2;

            if (i > 400)
            {
                let j = i - 400;
                y = j * 2 / n - 1;
                a = j * 40 / n + f + j / 3;
                d = j * 3 / n
            }

            let x = d * this.cos(a);
            let z = 2 + this.cos(f) + d * this.sin(a);

            x = 64 + x * 64 / z;
            y = 64 + y * 64 / z;

            let c = 6 + i % 5;
            let e = 5 / z;

            if (z > 0.1)
            {
                console.log("running graphics code");
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
        console.log = () => {};
    }

}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [CircleSpin]
};

const game = new Phaser.Game(config);

// https://twitter.com/lexaloffle/status/1003303393572425731
