var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create,
        update: update,
        extend: {
            updateLand: updateLand
        }
    }
};

var land = [];
var px = 0;
var py = 0;
var cursors;
var gridWidth = 15;
var gridHeight = 37;
var size = 50;
var spacing = 12;
var offsetY = 100;
var maxHeight = 100;
var waterHeight = 50;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('noise', 'assets/tests/heightmap.png');
}

function create ()
{
    var ox = size;
    var h = size / 2;
    var r = 0;

    for (var y = 0; y < gridHeight; y++)
    {
        var row = [];

        for (var x = 0; x < gridWidth - r; x++)
        {
            var tile = this.add.isobox(ox + x * size, offsetY + y * spacing, size, h, 0x8dcb0e, 0x3f8403, 0x63a505);

            row.push(tile);
        }

        r++;
        ox += size / 2;

        if (r === 2)
        {
            r = 0;
            ox = size;
        }

        land.push(row);
    }

    this.updateLand();

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    var down = false;

    if (cursors.left.isDown)
    {
        px--;

        if (px < 0)
        {
            px = 512;
        }

        down = true;
    }
    else if (cursors.right.isDown)
    {
        px++;

        if (px === 512)
        {
            px = 0;
        }

        down = true;
    }

    if (cursors.up.isDown)
    {
        py--;

        if (py < 0)
        {
            py = 512;
        }

        down = true;
    }
    else if (cursors.down.isDown)
    {
        py++;

        if (py === 512)
        {
            py = 0;
        }

        down = true;
    }

    if (down)
    {
        this.updateLand();
    }
}

function updateLand ()
{
    var r = 0;

    for (var y = 0; y < gridHeight; y++)
    {
        for (var x = 0; x < gridWidth - r; x++)
        {
            var cx = Phaser.Math.Wrap(px + x, 0, 512);
            var cy = Phaser.Math.Wrap(py + y, 0, 512);

            var color = this.textures.getPixel(cx, cy, 'noise');
            var total = Math.max(color.r, color.g, color.b);

            h = (total / 255) * maxHeight;

            if (h < waterHeight)
            {
                land[y][x].setFillStyle(0x00b9f2, 0x016fce, 0x028fdf);
            }
            else
            {
                land[y][x].setFillStyle(0x8dcb0e, 0x3f8403, 0x63a505);
            }

            land[y][x].height = h;
        }

        r++;

        if (r === 2)
        {
            r = 0;
        }
    }
}
