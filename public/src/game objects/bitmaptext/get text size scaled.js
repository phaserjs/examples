var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
};

var game = new Phaser.Game(config);

var text;
var bounds;
var string = 'Phaser 3\nBitmapText\nScaling\nwith bounds';

function preload() 
{
    this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
    this.load.bitmapFont('gothic', 'assets/fonts/bitmap/gothic.png', 'assets/fonts/bitmap/gothic.xml');
    this.load.bitmapFont('hyper', 'assets/fonts/bitmap/hyperdrive.png', 'assets/fonts/bitmap/hyperdrive.xml');
}

function create() 
{
    text = this.add.bitmapText(0, 0, 'atari', string);

    TweenMax.to(text, 4, {
        scaleX: 3,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    });

    TweenMax.to(text, 2, {
        scaleY: 4,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true
    });
}

function update()
{
    text.setText(string + '\nScale X: ' + text.scaleX.toFixed(4));
}

function render()
{
    bounds = text.getTextBounds();

    var ctx = this.sys.context;

    ctx.strokeStyle = 'rgba(0,225,0,1)';
    ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
}
