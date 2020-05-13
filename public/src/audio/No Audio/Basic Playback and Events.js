/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 *
 * Prometheus Brings Fire To Mankind - Painting by Heinrich Füger, 1817, Public Domain
 * The Creatures of Prometheus, Op. 43, Overture - Music by Ludwig van Beethoven, 1801, Public Domain
 */

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    },
    audio: {
        noAudio: true
    }
};

var game = new Phaser.Game(config);

var text;

function preload ()
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy';
    head.appendChild(link);

    this.load.image('prometheus', 'assets/pics/Prometheus Brings Fire To Mankind.jpg');

    this.load.audio('overture', [
        'assets/audio/Ludwig van Beethoven - The Creatures of Prometheus, Op. 43/Overture.ogg',
        'assets/audio/Ludwig van Beethoven - The Creatures of Prometheus, Op. 43/Overture.mp3'
    ]);

    this.load.audioSprite('creatures', 'assets/audio/Ludwig van Beethoven - The Creatures of Prometheus, Op. 43/sprites.json', [
        'assets/audio/Ludwig van Beethoven - The Creatures of Prometheus, Op. 43/sprites.ogg',
        'assets/audio/Ludwig van Beethoven - The Creatures of Prometheus, Op. 43/sprites.mp3'
    ]);
}

var first;
var second;
var audioSprite;

function create ()
{
    this.sound.pauseOnBlur = false;

    var prometheus = this.add.image(400, 300, 'prometheus');
    prometheus.setScale(600 / prometheus.height);

    text = this.add.text(400, 300, 'Loading...', {
        fontFamily: '\'Sorts Mill Goudy\', serif',
        fontSize: 80,
        color: '#fff',
        align: 'center'
    });
    text.setOrigin(0.5);
    text.setShadow(0, 1, '#8 88', 2);

    first = this.sound.add('overture', { loop: true });
    second = this.sound.add('overture', { loop: true });
    audioSprite = this.sound.addAudioSprite('creatures');

    first.once('destroy', onDestroy);
    second.once('destroy', onDestroy);
    audioSprite.once('destroy', onDestroy);

    enableInput.call(this);
}

function onDestroy (sound)
{
    console.log('destroy', sound.key);
}

function enableInput ()
{
    text.setText('Click to start');

    this.input.once('pointerdown', function (pointer)
    {
        first.play();
        first.pause();
        first.resume();
        first.stop();
        first.play();
        first.rate = 1.5;
        first.detune = 600;
        first.rate = 1;
        first.detune = 0;
        first.volume = 0;
        first.volume = 1;
        first.mute = true;
        first.mute = false;
        first.seek = 0;
        second.play();
        this.sound.mute = true;
        this.sound.mute = false;
        this.sound.volume = 0.5;
        this.sound.pauseAll();
        this.sound.resumeAll();
        this.sound.stopAll();
        audioSprite.play('07');
        audioSprite.pause();
        audioSprite.resume();
        audioSprite.play('06', {
            loop: true
        });
        audioSprite.volume = 1;
        audioSprite.stop();
        first.destroy();
        second.destroy();
        audioSprite.destroy();

        text.setText('Done');
    }, this);
}
