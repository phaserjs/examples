var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        extend: {
            getCharacter: getCharacter
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.text('3x5', 'assets/loader-tests/3x5.flf');
    this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
}

function create ()
{
    // https://github.com/Marak/asciimo/issues/3
    var font = this.cache.text.get('3x5').split('\n');

    // var width = 4;
    // var height = 6;
    // var start = 6;

    // The letters start at space (ASCII 32) and go in ASCII order up to 126

    var text = "Phaser 3";

    var x = 32;

    for (var i = 0; i < text.length; i++)
    {
        var letter = text.charCodeAt(i);

        console.log(text[i], letter);

        var offset = 6 + ((letter - 32) * 6);

        this.getCharacter(font, x, 32, offset, 4, 6);

        x += (4 * 17);
    }
}

function getCharacter (font, dx, dy, offset, width, height)
{
    var sx = dx;
    var sy = dy;

    for (var y = offset; y < offset + height; y++)
    {
        sx = dx;

        for (var x = 0; x < width; x++)
        {
            sx += 17;

            if (font[y][x] === '#')
            {
                this.add.image(sx, sy, 'balls');
            }
        }

        sy += 17;
    }
}
