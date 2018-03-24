var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    },
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

var newCanvas;
var originalTexture;
var newTexture;

var dude;
var dude2;

function preload() 
{
    this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create() 
{
    originalTexture = this.textures.get('dude').getSourceImage();

    var newTexture = this.textures.createCanvas('dude_new', originalTexture.width, originalTexture.height);

    context = newTexture.getSourceImage().getContext('2d');

    context.drawImage(originalTexture, 0, 0);

    dude = this.add.image(100, 100, 'dude');
    dude2 = this.add.image(200, 100, 'dude_new');

    this.time.addEvent({ delay: 500, callback: hueShift , loop: true });
}

function hueShift()
{
    var pixels = context.getImageData(0, 0, originalTexture.width, originalTexture.height);

    for (i = 0; i < pixels.data.length - 1; i++)
    {
        if (i % 4 == 0)
        {
            processPixel(pixels.data, i, 0.1);
        }

    }

    context.putImageData(pixels, 0, 0);
}

function processPixel(data, pixel, deltahue)
{
    var r = data[pixel];
    var g = data[pixel + 1];
    var b = data[pixel + 2];

    var hsv = Phaser.Display.Color.RGBToHSV(r, g, b);

    var h = hsv.h + deltahue;

    var rgb = Phaser.Display.Color.HSVToRGB(h, hsv.s, hsv.v);

    data[pixel] = rgb.r;
    data[pixel + 1] = rgb.g;
    data[pixel + 2] = rgb.b;
}