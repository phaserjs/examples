var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    state: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var graphics;
var s;
var r;
var colors;

function create ()
{
    graphics = this.add.graphics();

    colors = [ 0x650a05, 0xa00d05, 0xcd1106, 0xf53719, 0xf25520, 0xf26f21, 0xf49214, 0xf6a90a, 0xfad400, 0xfef700, 0xffff45, 0xffffc4, 0xffffff ];

    r = 0;
    s = [];

    for (var i = 0; i < colors.length; i++)
    {
        s.push(0);
    }
}

function update ()
{
    graphics.clear();

    r += 0.01;

    var scale = 1 - (colors.length * 0.01);

    for (var i = 0; i < colors.length; i++)
    {
        //  3D slant :)
        // drawLogo(colors[i], -380 + (i * 2), -100 + (i * 2), scale, s[i]);

        // drawLogo(colors[i], -380, -100, scale, s[i]);

        // drawLogo(colors[i], -380, -100 + ((i * 2) * Math.sin(r * 2)), scale, s[i]);

        drawLogo(colors[i], -380 + ((i * 2) * Math.sin(r * 2)), -100 + ((i * 2) * Math.cos(r * 2)), scale, s[i]);

        s[i] = Math.sin(r / 2);

        // s[i] = Math.sin(r * i) / 16;

        // s[i] = Math.sin(i) * r / 8;

        // s[i] = r + (i * 0.01);

        // s[i] += (Math.sin(r) * Math.sin(i)) / 128;
        // s[i] += (Math.sin(13 - i) / 1024);
        // s[i] += (0.002 * (0.25 * (i + 1) + 0.75 * (13 - i)));

        scale += 0.01;
    }
}

function drawLogo (color, x, y, scale, rot)
{
    var thickness = 4;
    var alpha = 1;

    graphics.lineStyle(thickness, color, alpha);

    var w = 100;
    var h = 200;
    var h2 = 100;
    var top = y + 0;
    var mid = y + 100;
    var bot = y + 200;
    var s = 20;

    graphics.save();
    graphics.translate(400, 300);
    graphics.scale(scale, scale);
    graphics.rotate(rot);

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
