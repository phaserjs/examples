var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload()
{
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
    this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
    this.load.bitmapFont('ice', 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby.xml');
    this.load.bitmapFont('gothic', 'assets/fonts/bitmap/gothic.png', 'assets/fonts/bitmap/gothic.xml');
    this.load.bitmapFont('hyper', 'assets/fonts/bitmap/hyperdrive.png', 'assets/fonts/bitmap/hyperdrive.xml');
}

function create()
{
    var text = this.add.bitmapText(400, 300, 'atari', '', 38)
        .setInteractive()
        .setOrigin(0.5)
        .setCenterAlign();

    text.setText([
        'Phaser 3',
        'BitmapText',
        'Click to change Font'
    ]);

    var fonts = [ 'atari', 'desyrel', 'ice', 'gothic', 'hyper' ];
    var currentFont = 0;

    this.input.on(Phaser.Input.Events.POINTER_DOWN, function () {
        currentFont++;
        text.setFont(fonts[currentFont % fonts.length]);
    }, this);
}
