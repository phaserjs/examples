var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('piano', 'assets/tests/piano/piano.png', 'assets/tests/piano/piano.json');

    this.load.setPath('assets/audio/synth-strings-sound-kit');

    this.load.audio('A2', 'StringAS2.mp3');
    this.load.audio('A3', 'StringAS3.mp3');
    this.load.audio('C2', 'StringC2.mp3');
    this.load.audio('C3', 'StringC3.mp3');
    this.load.audio('C4', 'StringC4.mp3');
    this.load.audio('D2', 'StringDS2.mp3');
    this.load.audio('D3', 'StringDS3.mp3');
    this.load.audio('F2', 'StringF2.mp3');
    this.load.audio('F3', 'StringF3.mp3');
    this.load.audio('G2', 'StringG2.mp3');
    this.load.audio('G3', 'StringG3.mp3');
}

function create ()
{
    this.input.once('pointerdown', createKeys, this);
}

function createKeys ()
{
    this.input.addPointer(9);

    var x = 0;
    var y = 0;

    this.add.image(x, y, 'piano', 'panel').setOrigin(0);

    var keys = {
        'key1': 'A2',
        'key2': 'A3',
        'key3': 'C2',
        'key4': 'C3',
        'key5': 'C4',
        'key6': 'D2',
        'key7': 'D3',
    };

    var black = [ 'key2', 'key4', 'key6' ];

    for (var key in keys)
    {
        var singleKey = this.add.image(x, y, 'piano', key);

        singleKey.setOrigin(0);

        if (black.indexOf(key) !== -1)
        {
            singleKey.setDepth(1);
        }

        var frame = singleKey.frame;

        var hitArea = new Phaser.Geom.Rectangle(frame.x, frame.y, frame.width, frame.height);

        singleKey.setInteractive(hitArea, Phaser.Geom.Rectangle.Contains);

        var note = this.sound.add(keys[key]);

        singleKey.setData('note', note);

        // var sound = this.sound;

        singleKey.on('pointerdown', function ()
        {
            // sound.play(keys[this.frame.name]);
            console.log(this.frame.name, keys[this.frame.name]);
            // note.play();

            this.getData('note').play();
        });

        singleKey.on('pointerup', function ()
        {
            // sound.stop(keys[this.frame.name]);
            // note.play();

            this.getData('note').stop();
        });

        singleKey.on('pointerover', function (pointer)
        {
            if (pointer.isDown)
            {
                // sound.play(keys[singleKey.frame.name]);
            }
        });
    }
}
