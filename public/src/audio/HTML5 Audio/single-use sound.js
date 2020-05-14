var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    audio: {
        disableWebAudio: true
    }
};

var game = new Phaser.Game(config);

var list;

function preload ()
{
    this.load.image('touhou', 'assets/pics/touhou1.png');

    this.load.setPath('assets/audio/tech');

    this.load.audio('bass', [ 'bass.ogg', 'bass.mp3' ], { instances: 4 });
    this.load.audio('drums', [ 'drums.ogg', 'drums.mp3' ], { instances: 4 });
    this.load.audio('percussion', [ 'percussion.ogg', 'percussion.mp3' ], { instances: 4 });
    this.load.audio('synth1', [ 'synth1.ogg', 'synth1.mp3' ], { instances: 4 });
    this.load.audio('synth2', [ 'synth2.ogg', 'synth2.mp3' ], { instances: 4 });
    this.load.audio('top1', [ 'top1.ogg', 'top1.mp3' ], { instances: 4 });
    this.load.audio('top2', [ 'top2.ogg', 'top2.mp3' ], { instances: 4 });
}

function create ()
{
    this.add.image(790, 600, 'touhou').setOrigin(1);

    var keys = [
        'Press keys [1] to [7] to play',
        '',
        'SPACE to stop all sounds'
    ];

    var text = this.add.text(10, 10, keys, { font: '32px Courier', fill: '#00ff00' });

    list = this.add.text(10, 310, '--', { font: '16px Courier' });

    if (this.sound.locked)
    {
        text.setText('Click to start');

        this.sound.once('unlocked', function ()
        {
            text.setText(keys);
        });
    }

    this.input.keyboard.on('keyup-SPACE', function ()
    {
        this.sound.stopAll();
    }, this);

    this.input.keyboard.on('keyup-ONE', function ()
    {
        this.sound.play('bass');
    }, this);

    this.input.keyboard.on('keyup-TWO', function ()
    {
        this.sound.play('drums');
    }, this);

    this.input.keyboard.on('keyup-THREE', function ()
    {
        this.sound.play('percussion');
    }, this);

    this.input.keyboard.on('keyup-FOUR', function ()
    {
        this.sound.play('synth1');
    }, this);

    this.input.keyboard.on('keyup-FIVE', function ()
    {
        this.sound.play('synth2');
    }, this);

    this.input.keyboard.on('keyup-SIX', function ()
    {
        this.sound.play('top1');
    }, this);

    this.input.keyboard.on('keyup-SEVEN', function ()
    {
        this.sound.play('top2');
    }, this);
}

function update ()
{
    list.setText(this.sound.sounds.map(function (sound, i)
    {
        return `${Phaser.Utils.String.Pad(i, 2, ' ', 1)} ${sound.isPlaying ? '>' : ' '} ${sound.key}`;
    }));
}
