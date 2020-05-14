var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    },
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.bitmapFont('font', 'assets/fonts/bitmap/atari-sunset.png', 'assets/fonts/bitmap/atari-sunset.xml');
}

function create ()
{
    var audio = this.game.device.audio;
    var text = [];

    for (var key in audio) {
        text.push(key + ' - ' + (audio[key] ? 'yes' : 'no'));
    }

    this.add.bitmapText(20, 10, 'font', text, 32);
}

