let graphics;
let s;
let r;
let colors;
let go;
let props;
let logos;

class Example extends Phaser.Scene
{
    create ()
    {
        graphics = this.add.graphics();

        const hsv = Phaser.Display.Color.HSVColorWheel();

        colors = [];

        for (let i = 0; i < hsv.length; i += 4)
        {
            colors.push(hsv[i].color);
        }

        r = 0;
        s = [];
        go = false;
        logos = 13;

        props = {
            a: 0,
            thickness: 10,
            alpha: 1
        };

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
                    targets: [props],
                    a: 1,
                    duration: 500,
                    repeat: -1,
                    onRepeat: () => {
                        Phaser.Utils.Array.RotateRight(colors);
                    },
                })
            }
        });

        this.time.addEvent({
            delay: 30000,
            callback: () => {
                this.tweens.add({
                    targets: [props],
                    alpha: 0.1,
                    duration: 3000,
                    ease: Phaser.Math.Easing.Sine.InOut,
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 4
                });
            }
        });

        this.time.addEvent({
            delay: 22000,
            callback: () => {
                this.tweens.add({
                    targets: [props],
                    thickness: 2,
                    duration: 6000,
                    ease: Phaser.Math.Easing.Sine.InOut,
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 16
                });
            }
        });


    }

    update ()
    {
        graphics.clear();

        r += 0.015;

        let scale = 0.9 - (logos * 0.01);

        for (let i = 0; i < logos; i++)
        {
            this.drawLogo(colors[i], -400 + ((i * 2) * Math.sin(r * 2)), -100 + ((i * 2) * Math.cos(r * 2)), scale, s[i]);

            if (go)
            {
                s[i] = Math.sin(r / 2);
            }

            scale += 0.01;
        }
    }

    drawLogo (color, x, y, scale, rot)
    {
        graphics.lineStyle(Math.round(props.thickness), color, props.alpha);

        const w = 100;
        const h = 200;
        const h2 = 100;
        const top = y + 0;
        const mid = y + 100;
        const bot = y + 200;
        const s = 30;

        graphics.save();
        graphics.translateCanvas(400, 300);
        graphics.scaleCanvas(scale, scale);
        graphics.rotateCanvas(rot);

        graphics.beginPath();

        //  P
        graphics.moveTo(x, top);
        graphics.lineTo(x + w, top);
        graphics.lineTo(x + w, mid);
        graphics.lineTo(x, mid);
        graphics.lineTo(x, bot);

        //  H
        x += w + s;

        graphics.moveTo(x, top);
        graphics.lineTo(x, bot);
        graphics.moveTo(x, mid);
        graphics.lineTo(x + w, mid);
        graphics.moveTo(x + w, top);
        graphics.lineTo(x + w, bot);

        //  A
        x += w + s;

        graphics.moveTo(x, bot);
        graphics.lineTo(x + (w * 0.75), top);
        graphics.lineTo(x + (w * 0.75) + (w * 0.75), bot);

        //  S
        x += ((w * 0.75) * 2) + s;

        graphics.moveTo(x + w, top);
        graphics.lineTo(x, top);
        graphics.lineTo(x, mid);
        graphics.lineTo(x + w, mid);
        graphics.lineTo(x + w, bot);
        graphics.lineTo(x, bot);

        //  E
        x += w + s;

        graphics.moveTo(x + w, top);
        graphics.lineTo(x, top);
        graphics.lineTo(x, bot);
        graphics.lineTo(x + w, bot);
        graphics.moveTo(x, mid);
        graphics.lineTo(x + w, mid);

        //  R
        x += w + s;

        graphics.moveTo(x, top);
        graphics.lineTo(x + w, top);
        graphics.lineTo(x + w, mid);
        graphics.lineTo(x, mid);
        graphics.lineTo(x, bot);
        graphics.moveTo(x, mid);
        graphics.lineTo(x + w, bot);

        graphics.strokePath();

        graphics.restore();
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

