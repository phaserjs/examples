var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
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
}

function create() 
{
    var text = this.add.bitmapText(0, 0, 'atari', '', 40);

    text.setText([
        'Atari 520 ST',
        'Atari 1040 STE',
        'Atari Falcon 030',
        'Atari Jaguar',
        'Atari Lynx'
    ]);

    var graphics = this.add.graphics();

    graphics.fillStyle(0xff0000, 0.5);

    var bounds = text.getTextBounds();

    graphics.fillRect(0, 0, bounds.lines.lengths[0], 40);
    graphics.fillRect(0, 41, bounds.lines.lengths[1], 40);
    graphics.fillRect(0, 82, bounds.lines.lengths[2], 40);
    graphics.fillRect(0, 123, bounds.lines.lengths[3], 40);
    graphics.fillRect(0, 164, bounds.lines.lengths[4], 40);

    console.log(bounds.lines);
}
