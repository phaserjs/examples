var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var quad;
var graphics;

var c;
var tl;
var tr;
var bl;
var br;

var inside = 0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image', 'assets/pics/sure-shot-by-made.png');
}

function create ()
{
    quad = this.add.quad(400, 300, 'image');

    graphics = this.add.graphics();

    c = new Phaser.Geom.Circle(quad.x, quad.y, 16);
    tl = new Phaser.Geom.Circle(quad.topLeftX, quad.topLeftY, 16);
    tr = new Phaser.Geom.Circle(quad.topRightX, quad.topRightY, 16);
    bl = new Phaser.Geom.Circle(quad.bottomLeftX, quad.bottomLeftY, 16);
    br = new Phaser.Geom.Circle(quad.bottomRightX, quad.bottomRightY, 16);

    updateGraphics();

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
}

function onMove (event)
{
    var x = Math.floor(event.clientX);
    var y = Math.floor(event.clientY);

    switch (inside)
    {
        case 1:
            tl.setPosition(x, y);
            quad.setTopLeft(x, y);
            break;

        case 2:
            tr.setPosition(x, y);
            quad.setTopRight(x, y);
            break;

        case 3:
            bl.setPosition(x, y);
            quad.setBottomLeft(x, y);
            break;

        case 4:
            br.setPosition(x, y);
            quad.setBottomRight(x, y);
            break;

        case 5:
            c.setPosition(x, y);
            quad.setPosition(x, y);
            tl.setPosition(quad.topLeftX, quad.topLeftY);
            tr.setPosition(quad.topRightX, quad.topRightY);
            bl.setPosition(quad.bottomLeftX, quad.bottomLeftY);
            br.setPosition(quad.bottomRightX, quad.bottomRightY);
            break;
    }

    updateGraphics();
}

function onDown (event)
{
    var x = Math.floor(event.clientX);
    var y = Math.floor(event.clientY);

    inside = 0;

    if (Phaser.Geom.Circle.Contains(tl, x, y))
    {
        inside = 1;
    }
    else if (Phaser.Geom.Circle.Contains(tr, x, y))
    {
        inside = 2;
    }
    else if (Phaser.Geom.Circle.Contains(bl, x, y))
    {
        inside = 3;
    }
    else if (Phaser.Geom.Circle.Contains(br, x, y))
    {
        inside = 4;
    }
    else if (Phaser.Geom.Circle.Contains(c, x, y))
    {
        inside = 5;
    }
}

function onUp (event)
{
    inside = 0;
}

function updateGraphics ()
{
    graphics.clear();

    graphics.lineStyle(2, 0xff00ff, 0.8);

    graphics.strokeCircleShape(tl);
    graphics.strokeCircleShape(tr);
    graphics.strokeCircleShape(bl);
    graphics.strokeCircleShape(br);

    graphics.lineStyle(2, 0xffff00, 0.8);

    graphics.strokeCircleShape(c);
}
