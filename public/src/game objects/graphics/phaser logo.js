class Example extends Phaser.Scene
{
    r = 0;
    graphics;

    create ()
    {
        this.graphics = this.add.graphics();
    }

    update ()
    {
        this.r += 0.02;

        this.graphics.clear();

        //  From back to front :)

        this.drawLogo(0x650a05, -380, -100, 0.76);
        this.drawLogo(0xa00d05, -380, -100, 0.78);
        this.drawLogo(0xcd1106, -380, -100, 0.80);
        this.drawLogo(0xf53719, -380, -100, 0.82);
        this.drawLogo(0xf25520, -380, -100, 0.84);
        this.drawLogo(0xf26f21, -380, -100, 0.86);
        this.drawLogo(0xf49214, -380, -100, 0.88);
        this.drawLogo(0xf6a90a, -380, -100, 0.90);
        this.drawLogo(0xfad400, -380, -100, 0.92);
        this.drawLogo(0xfef700, -380, -100, 0.94);
        this.drawLogo(0xffff45, -380, -100, 0.96);
        this.drawLogo(0xffffc4, -380, -100, 0.98);
        this.drawLogo(0xffffff, -380, -100, 1.00);
    }

    drawLogo (color, x, y, scale)
    {
        const thickness = 2;
        const alpha = 1;

        this.graphics.lineStyle(thickness, color, alpha);

        const w = 100;
        const h = 200;
        const h2 = 100;
        const top = y + 0;
        const mid = y + 100;
        const bot = y + 200;
        const s = 20;

        this.graphics.save();
        this.graphics.translateCanvas(400, 300);
        this.graphics.scaleCanvas(scale, scale);
        this.graphics.rotateCanvas(this.r);

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
