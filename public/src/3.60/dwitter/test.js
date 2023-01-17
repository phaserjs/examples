const T = Math.tan;
const C = Math.cos;
const S = Math.sin;

class Example extends Phaser.Scene
{
    frame = 0;
    time = 0;
    x;
    c;

    create ()
    {
        const canvasTexture = this.textures.createCanvas('dwitter', 1920, 1080);

        this.c = canvasTexture.getSourceImage();
        this.x = this.c.getContext('2d');

        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.5);
    }

    update ()
    {
        this.time = this.frame / 60;

        if (this.time * 60 | this.frame - 1 === 0)
        {
            this.time += 0.000001;
        }

        this.frame++;

        this.u(this.time);
    }

    R (r, g, b, a)
    {
        a = a === undefined ? 1 : a;

        return `rgba(${r|0},${g|0},${b|0},${a})`;
    }

    u (t)
    {
        let c = this.c;
        let x = this.x;
        let i;
        let q;

        c.width |= i = 300;
        x.lineWidth = 0.1;
        while (--i) { q = 19 + S(t / 6) / 28 * i,x.arc(S(q / 3) * i + q * 60,(C(q * S(t / 2)) + 4) * i / 2 + 200,(C(q) * 60 + 200) * S(i / 96),0,7); }
        x.stroke();
    }
}

const config = {
    width: 960,
    height: 540,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    backgroundColor: '#ffffff',
    scene: Example
};

const game = new Phaser.Game(config);
