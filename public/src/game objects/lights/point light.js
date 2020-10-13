var ColourSpectrum = function ()
{
    this.colours = [];

    var rgbRange = 255;
    var r = rgbRange, g = 0, b = 0;

    // From red to yellow:
    for (var g=0;g<=rgbRange;g++)
    {
        this.colours.push({ r: r / 255, g: g / 255, b: b / 255 });
    }

    // From yellow to green:
    for (var r=rgbRange;r>=0;r--)
    {
        this.colours.push({ r: r / 255, g: g / 255, b: b / 255 });
    }

    // From green to blue:
    for (var b=0;b<=rgbRange;b++,g--)
    {
        this.colours.push({ r: r / 255, g: g / 255, b: b / 255 });
    }

    // From blue to red:
    for (var d=0;d<=rgbRange;d++,b--,r++)
    {
        this.colours.push({ r: r / 255, g: g / 255, b: b / 255 });
    }

    this.random = function ()
    {
        return this.colours[Math.floor(Math.random() * this.colours.length)];
    }

    this.get = function (index)
    {
        if (index > this.colours.length || index < 0)
        {
            console.error("Index exceeds range");
        }
        else
        {
            return this.colours[index];
        }
    }
};

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};


var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    this.load.image('bg', 'assets/textures/gold.png');
}

function create ()
{
    this.add.sprite(400, 300, 'bg').setAlpha(0.2);

    var light = this.lights.addPointLight(400, 300, 0xff0000, 128);

    window.light = light;

    this.input.on('pointermove', pointer => {

        light.x = pointer.x;
        light.y = pointer.y;

    });

    this.add.sprite(680, 600, 'sonic').setOrigin(0.5, 1);
}
