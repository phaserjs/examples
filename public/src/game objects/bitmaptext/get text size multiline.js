var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        render: render
    }
};

var game = new Phaser.Game(config);

var text;
var bounds;

function preload() 
{
    this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
    this.load.bitmapFont('gothic', 'assets/fonts/bitmap/gothic.png', 'assets/fonts/bitmap/gothic.xml');
    this.load.bitmapFont('hyper', 'assets/fonts/bitmap/hyperdrive.png', 'assets/fonts/bitmap/hyperdrive.xml');
}

function create() 
{
    text = this.add.bitmapText(32, 100, 'hyper', 'Arkanoid\nRevenge of Doh', 96);

    bounds = text.getTextBounds();
}

function render()
{
    var ctx = this.sys.context;

    ctx.strokeStyle = 'rgba(0,225,0,1)';
    ctx.strokeRect(bounds.global.x, bounds.global.y, bounds.global.width, bounds.global.height);
}
