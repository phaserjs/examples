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
    // text = this.add.bitmapText(0, 0, 'desyrel', 'welcome to the jungle\nwe got fun and games');
    // text = this.add.bitmapText(0, 0, 'atari', 'Welcome!', 70);
    // text = this.add.bitmapText(100, 100, 'gothic', 'Welcome to the Jungle!', 40);
    text = this.add.bitmapText(100, 100, 'hyper', 'Terminator 2', 128);

    // text.setScale(2);

    bounds = text.getTextBounds();

    console.log(bounds);
}

function render()
{
    var ctx = this.sys.context;

    ctx.strokeStyle = 'rgba(0,255,0,1)';
    ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
}
