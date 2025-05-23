let s;
let r;
let logos;
let alpha;
let colors;
let thickness;
let go = false;
let temp = { t: 0 };

class Example extends Phaser.Scene
{
    graphics;
    create ()
    {
        this.graphics = this.add.graphics();

        const hsv = Phaser.Display.Color.HSVColorWheel();

        colors = [];

        for (let i = 0; i < hsv.length; i += 4)
        {
            colors.push(hsv[i].color);
        }

        // colors = [ 0x650a05, 0xa00d05, 0xcd1106, 0xf53719, 0xf25520, 0xf26f21, 0xf49214, 0xf6a90a, 0xfad400, 0xfef700, 0xffff45, 0xffffc4, 0xffffff ];
        r = 0;
        s = [];
        logos = 13;
        thickness = 10;
        alpha = 1;

        for (let i = 0; i < logos; i++)
        {
            s.push(0);
        }

        this.time.addEvent({
            delay: 5000,
            callback: () => {
                r = 0;
                go = true;
            }
        });

        this.time.addEvent({
            delay: 14000,
            callback: () => {
                this.tweens.add({
                    targets: [temp],
                    t: 1,
                    duration: 100,
                    repeat: -1,
                    onRepeat: () => {
                        Phaser.Utils.Array.RotateRight(colors);
                    },
                })
            }
        });
    }

    update ()
    {
        this.graphics.clear();

        r += 0.01;

        let scale = 0.9 - (logos * 0.01);

        for (let i = 0; i < logos; i++)
        {
            //  3D slant :)
            // drawLogo(colors[i], -380 + (i * 2), -100 + (i * 2), scale, s[i]);

            // drawLogo(colors[i], -380, -100, scale, s[i]);

            // drawLogo(colors[i], -380, -100 + ((i * 2) * Math.sin(r * 2)), scale, s[i]);

            this.drawLogo(colors[i], -380 + ((i * 2) * Math.sin(r * 2)), -100 + ((i * 2) * Math.cos(r * 2)), scale, s[i]);

            if (go)
            {
                s[i] = Math.sin(r / 2);
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
        // var thickness = 10;
        // var alpha = 1;
        this.graphics.lineStyle(thickness, color, alpha);

        const w = 100;
        const h = 200;
        const h2 = 100;
        const top = y + 0;
        const mid = y + 100;
        const bot = y + 200;
        const s = 30;

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
    scene: Example
};

const game = new Phaser.Game(config);
