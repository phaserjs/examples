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

var text1;
var text2;
var text3;
var bounds1;
var bounds2;
var bounds3;

function preload() 
{
    this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
    this.load.bitmapFont('gothic', 'assets/fonts/bitmap/gothic.png', 'assets/fonts/bitmap/gothic.xml');
    this.load.bitmapFont('hyper', 'assets/fonts/bitmap/hyperdrive.png', 'assets/fonts/bitmap/hyperdrive.xml');
}

function create() 
{
    text1 = this.add.bitmapText(32, 32, 'atari', 'Welcome!', 70);
    text2 = this.add.bitmapText(64, 160, 'gothic', 'Welcome to the Jungle!', 40);
    text3 = this.add.bitmapText(100, 300, 'hyper', 'Terminator', 128);

    bounds1 = text1.getTextBounds();
    bounds2 = text2.getTextBounds();
    bounds3 = text3.getTextBounds();
}

function render()
{
    var ctx = this.sys.context;

    ctx.strokeStyle = 'rgba(255,0,0,1)';
    ctx.strokeRect(bounds1.x, bounds1.y, bounds1.width, bounds1.height);

    ctx.strokeStyle = 'rgba(255,255,0,1)';
    ctx.strokeRect(bounds2.x, bounds2.y, bounds2.width, bounds2.height);

    ctx.strokeStyle = 'rgba(0,225,0,1)';
    ctx.strokeRect(bounds3.x, bounds3.y, bounds3.width, bounds3.height);
}
