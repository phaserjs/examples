var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
        extend: {
            drawStart: drawStart,
            drawStop: drawStop,
            drawUpdate: drawUpdate,
            setCircle: setCircle,
            setRectangle: setRectangle,
            setEllipse: setEllipse,
            setStar: setStar,
            setLine: setLine
        }
    }
};

var shapes = [];
var isDown = false;
var current = 1;
var shape;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/skies/gradient5.png');
    this.load.image('swatch', 'assets/swatches/deluxe-paint-swatch.png');
}

function create ()
{
    this.add.image(400, 300, 'bg');
    this.add.image(400, 600, 'swatch').setOrigin(0.5, 1);

    this.input.keyboard.on('keydown_C', this.setCircle, this);
    this.input.keyboard.on('keydown_R', this.setRectangle, this);
    this.input.keyboard.on('keydown_E', this.setEllipse, this);
    this.input.keyboard.on('keydown_S', this.setStar, this);
    this.input.keyboard.on('keydown_L', this.setLine, this);

    cursors = this.input.keyboard.createCursorKeys();

    this.input.on('pointerdown', this.drawStart, this);
    this.input.on('pointermove', this.drawUpdate, this);
    this.input.on('pointerup', this.drawStop, this);
}

function update ()
{
    if (this.input.keyboard.checkDown(cursors.left, 100))
    {
        shape.x -= (cursors.left.shiftKey) ? 10 : 1;
    }
    else if (this.input.keyboard.checkDown(cursors.right, 100))
    {
        shape.x += (cursors.right.shiftKey) ? 10 : 1;
    }

    if (this.input.keyboard.checkDown(cursors.up, 100))
    {
        shape.y -= (cursors.up.shiftKey) ? 10 : 1;
    }
    else if (this.input.keyboard.checkDown(cursors.down, 100))
    {
        shape.y += (cursors.down.shiftKey) ? 10 : 1;
    }
}

function drawStart (pointer)
{
    if (current === 0)
    {
        return;
    }

    isDown = true;

    switch (current)
    {
        case 1:
            shape = this.add.circle(pointer.x, pointer.y, 4, 0xff0000);
            break;

        case 2:
            shape = this.add.rectangle(pointer.x, pointer.y, 4, 4, 0xff0000);
            break;

        case 3:
            shape = this.add.ellipse(pointer.x, pointer.y, 4, 4, 0xff0000);
            break;

        case 4:
            shape = this.add.star(pointer.x, pointer.y, 5, 2, 4, 0xff0000);
            break;

        case 5:
            shape = this.add.line(pointer.x, pointer.y, 0, 0, 4, 0, 0xff0000);
            break;
    }

}

function drawUpdate (pointer)
{
    if (!isDown)
    {
        return;
    }

    switch (current)
    {
        case 1:
            shape.radius = pointer.getDistance();
            break;

        case 2:
            shape.setSize(pointer.x - pointer.downX, pointer.y - pointer.downY);
            break;

        case 3:
            shape.setSize((pointer.x - pointer.downX) * 2, (pointer.y - pointer.downY) * 2);
            break;

        case 4:
            shape.scaleX = pointer.x - pointer.downX;
            shape.scaleY = pointer.y - pointer.downY;
            break;

        case 5:
            shape.setTo(0, 0, pointer.x - pointer.downX, pointer.y - pointer.downY);
            break;
    }
}

function drawStop ()
{
    isDown = false;

    shapes.push(shape);
}

function setCircle ()
{
    if (isDown)
    {
        return;
    }

    current = 1;
}

function setRectangle ()
{
    if (isDown)
    {
        return;
    }

    current = 2;
}

function setEllipse ()
{
    if (isDown)
    {
        return;
    }

    current = 3;
}

function setStar ()
{
    if (isDown)
    {
        return;
    }

    current = 4;
}


function setLine ()
{
    if (isDown)
    {
        return;
    }

    current = 5;
}

