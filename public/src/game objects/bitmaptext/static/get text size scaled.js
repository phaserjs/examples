var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var text;
var bounds;
var graphics;
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
    graphics = this.add.graphics(0, 0);
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
    bounds = text.getTextBounds();

    graphics.clear();
    graphics.lineStyle(1, 0x00FF00, 1.0);
    graphics.strokeRect(bounds.global.x, bounds.global.y, bounds.global.width, bounds.global.height);
}

