// This example uses TweenMax which is an external library which does not run in the Sandbox.
// This will give you an undefined error.
// However, TweenMax will run if you launch.

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.graphics = undefined;
        this.s = undefined;
        this.r = undefined;
        this.colors = undefined;
        this.go = false;
        this.temp = { t: 0 };
        this.logos = undefined;
        this.thickness = undefined;
        this.alpha = undefined;
        this.hsv = Phaser.Display.Color.HSVColorWheel();

    }

    create ()
    {
        this.graphics = this.add.graphics();

        this.colors = [];

        for (let i = 0; i < this.hsv.length; i += 4)
        {
            this.colors.push(this.hsv[i].color);
        }

        // colors = [ 0x650a05, 0xa00d05, 0xcd1106, 0xf53719, 0xf25520, 0xf26f21, 0xf49214, 0xf6a90a, 0xfad400, 0xfef700, 0xffff45, 0xffffc4, 0xffffff ];

        this.r = 0;
        this.s = [];
        this.logos = 13;
        this.thickness = 10;
        this.alpha = 1;

        for (let i = 0; i < this.logos; i++)
        {
            this.s.push(0);
        }

        TweenMax.delayedCall(5, function () {

            this.r = 0;
            this.go = true;

        });

        TweenMax.delayedCall(14, function () {

            TweenMax.to(this.temp, 0.1, {

                t: 1,

                repeat: -1,

                onRepeat: function () {
                    Phaser.Utils.Array.RotateRight(this.colors);
                }

            });

        });
    }

    update ()
    {
        this.graphics.clear();

        this.r += 0.01;

        let scale = 0.9 - (this.logos * 0.01);

        for (let i = 0; i < this.logos; i++)
        {
            //  3D slant :)
            // drawLogo(colors[i], -380 + (i * 2), -100 + (i * 2), scale, s[i]);

            // drawLogo(colors[i], -380, -100, scale, s[i]);

            // drawLogo(colors[i], -380, -100 + ((i * 2) * Math.sin(r * 2)), scale, s[i]);

            this.drawLogo(this.colors[i], -380 + ((i * 2) * Math.sin(this.r * 2)), -100 + ((i * 2) * Math.cos(this.r * 2)), scale, this.s[i]);

            if (this.go)
            {
                this.s[i] = Math.sin(this.r / 2);
            }

            // s[i] = Math.sin(r * i) / 16;

            // s[i] = Math.sin(i) * r / 8;

            // s[i] = r + (i * 0.01);

            // s[i] += (Math.sin(r) * Math.sin(i)) / 128;
            // s[i] += (Math.sin(13 - i) / 1024);
            // s[i] += (0.002 * (0.25 * (i + 1) + 0.75 * (13 - i)));

            scale += 0.01;
        }
    }

    drawLogo (color, x, y, scale, rot)
    {
        // let thickness = 10;
        // let alpha = 1;

        this.graphics.lineStyle(this.thickness, color, this.alpha);

        let w = 100;
        let h = 200;
        let h2 = 100;
        let top = y + 0;
        let mid = y + 100;
        let bot = y + 200;
        let s = 30;

        this.graphics.save();
        this.graphics.translateCanvas(400, 300);
        this.graphics.scaleCanvas(scale, scale);
        this.graphics.rotateCanvas(rot);

        this.graphics.beginPath();

        //  P

        this.graphics.moveTo(x, top);
        this.graphics.lineTo(x + w, top);
        this.graphics.lineTo(x + w, mid);
        this.graphics.lineTo(x, mid);
        this.graphics.lineTo(x, bot);

        //  H

        x += w + s;

        this.graphics.moveTo(x, top);
        this.graphics.lineTo(x, bot);
        this.graphics.moveTo(x, mid);
        this.graphics.lineTo(x + w, mid);
        this.graphics.moveTo(x + w, top);
        this.graphics.lineTo(x + w, bot);

        //  A

        x += w + s;

        this.graphics.moveTo(x, bot);
        this.graphics.lineTo(x + (w * 0.75), top);
        this.graphics.lineTo(x + (w * 0.75) + (w * 0.75), bot);

        //  S

        x += ((w * 0.75) * 2) + s;

        this.graphics.moveTo(x + w, top);
        this.graphics.lineTo(x, top);
        this.graphics.lineTo(x, mid);
        this.graphics.lineTo(x + w, mid);
        this.graphics.lineTo(x + w, bot);
        this.graphics.lineTo(x, bot);

        //  E

        x += w + s;

        this.graphics.moveTo(x + w, top);
        this.graphics.lineTo(x, top);
        this.graphics.lineTo(x, bot);
        this.graphics.lineTo(x + w, bot);
        this.graphics.moveTo(x, mid);
        this.graphics.lineTo(x + w, mid);

        //  R

        x += w + s;

        this.graphics.moveTo(x, top);
        this.graphics.lineTo(x + w, top);
        this.graphics.lineTo(x + w, mid);
        this.graphics.lineTo(x, mid);
        this.graphics.lineTo(x, bot);
        this.graphics.moveTo(x, mid);
        this.graphics.lineTo(x + w, bot);

        this.graphics.strokePath();

        this.graphics.restore();
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: [Example]
};

const game = new Phaser.Game(config);
