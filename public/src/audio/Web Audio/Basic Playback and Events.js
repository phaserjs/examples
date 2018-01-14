/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 */

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#a2998c',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var text;

function preload ()
{
    var graphics = this.add.graphics();
    graphics.fillStyle(0xe0dad2);
    graphics.fillRect(30, 30, 740, 540);

    text = this.add.text(400, 300, 'LOADING...', {
        fontFamily: '\'Lucida Grande\', Arial',
        fontSize: 80,
        color: '#a2998c',
        fontStyle: 'bold',
        align: 'center'
    });
    text.setOrigin(0.5);

    this.load.audio('CatAstroPhi', [
        'assets/audio/CatAstroPhi_shmup_normal.ogg',
        'assets/audio/CatAstroPhi_shmup_normal.mp3'
    ]);

    this.load.audioSprite('sfx', [
        'assets/audio/SoundEffects/fx_mixdown.ogg',
        'assets/audio/SoundEffects/fx_mixdown.mp3'
    ], 'assets/audio/SoundEffects/fx_mixdown.json');
}

var first;
var second;
var audioSprite;

var tests = [

    function (fn)
    {
        first.once('play', function (sound)
        {
            text.setText('PLAYING');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.play();
    },

    function (fn)
    {
        first.once('pause', function (sound)
        {
            text.setText('PAUSED');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.pause();
    },

    function(fn)
    {
        first.once('resume', function (sound)
        {
            text.setText('RESUMING');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.resume();
    },

    function(fn)
    {
        first.once('stop', function (sound)
        {
            text.setText('STOPPED');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.stop();
    },

    function(fn)
    {
        first.once('play', function (sound)
        {
            text.setText('PLAY FROM\nSTART');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.play();
    },

    function(fn)
    {
        first.once('rate', function (sound, value)
        {
            text.setText('SPEED UP\nRATE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.rate = 1.5;
    },

    function(fn)
    {
        first.once('detune', function (sound, value)
        {
            text.setText('SPEED UP\nDETUNE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.detune = 600;
    },

    function(fn)
    {
        first.once('rate', function (sound, value)
        {
            text.setText('SLOW DOWN\nRATE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.rate = 1;
    },

    function(fn)
    {
        first.once('detune', function (sound, value)
        {
            text.setText('SLOW DOWN\nDETUNE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.detune = 0;
    },

    function(fn)
    {
        this.tweens.add({

            onStart: function ()
            {
                text.setText('FADE OUT');
            },

            targets: first,
            volume: 0,

            ease: 'Linear',
            duration: 2000,

            onComplete: fn
        });
    },

    function(fn)
    {
        this.tweens.add({

            onStart: function ()
            {
                text.setText('FADE IN');
            },

            targets: first,
            volume: 1,

            ease: 'Linear',
            duration: 2000,

            onComplete: fn
        });
    },

    function(fn)
    {
        first.once('mute', function()
        {
            text.setText('MUTE');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.mute = true;
    },

    function(fn)
    {
        first.once('mute', function()
        {
            text.setText('UNMUTE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.mute = false;
    },

    function(fn)
    {
        first.once('volume', function()
        {
            text.setText('HALF VOLUME');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.volume = 0.5;
    },

    function(fn)
    {
        first.once('volume', function()
        {
            text.setText('FULL VOLUME');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.volume = 1;
    },

    function(fn)
    {
        first.once('seek', function()
        {
            text.setText('SEEK TO START');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        first.seek = 0;
    },

    function(fn)
    {
        second.once('play', function()
        {
            text.setText('PLAY 2ND');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        second.play();
    },

    function(fn)
    {
        this.sound.once('mute', function (soundManager, value)
        {
            text.setText('MUTE GLOBAL');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        this.sound.mute = true;
    },

    function(fn)
    {
        this.sound.once('mute', function (soundManager, value)
        {
            text.setText('UNMUTE GLOBAL');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        this.sound.mute = false;
    },

    function(fn)
    {
        this.sound.once('volume', function (soundManager, value)
        {
            text.setText('HALF VOLUME\nGLOBAL');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        this.sound.volume = 0.5;
    },

    function(fn)
    {
        this.tweens.add({

            onStart: function ()
            {
                text.setText('FADE OUT\nGLOBAL');
            },

            targets: this.sound,
            volume: 0,

            ease: 'Linear',
            duration: 2000,

            onComplete: fn
        });
    },

    function(fn)
    {
        this.tweens.add({

            onStart: function ()
            {
                text.setText('FADE IN\nGLOBAL');
            },

            targets: this.sound,
            volume: 1,

            ease: 'Linear',
            duration: 2000,

            onComplete: fn
        });
    },

    function(fn)
    {
        this.sound.once('pauseall', function (soundManager)
        {
            text.setText('PAUSE ALL');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        this.sound.pauseAll();
    },

    function(fn)
    {
        this.sound.once('resumeall', function (soundManager)
        {
            text.setText('RESUME ALL');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        this.sound.resumeAll();
    },

    function(fn)
    {
        this.sound.once('stopall', function (soundManager)
        {
            text.setText('STOP ALL');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        this.sound.stopAll();
    },

    function(fn)
    {
        audioSprite.once('play', function (sound)
        {
            text.setText('PLAY SPRITE');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        audioSprite.play('death');
    },

    function(fn)
    {
        audioSprite.once('pause', function (sound)
        {
            text.setText('PAUSE SPRITE');
            this.time.addEvent({
                delay: 1000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        audioSprite.pause();
    },

    function(fn)
    {
        audioSprite.once('resume', function (sound)
        {
            text.setText('RESUME SPRITE');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }, this);

        audioSprite.resume();
    },

    function(fn)
    {
        audioSprite.once('play', function (sound)
        {
            text.setText('MULTIPLE\nSPRITES');
            this.time.addEvent({
                delay: 3000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        var sounds = ['boss hit', 'meow', 'numkey', 'squit', 'alien death'];

        for (var i=0; i<sounds.length; i++)
        {
            this.time.addEvent({
                delay: i * 500,
                callback: audioSprite.play.bind(audioSprite, sounds[i]),
                callbackScope: audioSprite
            });
        }
    },

    function(fn)
    {
        audioSprite.once('play', function (sound)
        {
            text.setText('LOOP SPRITE');
            this.time.addEvent({
                delay: 3000,
                callback: fn,
                callbackScope: this
            });
        }, this);

        audioSprite.play('ping', {
            loop: true
        });
    },

    function(fn)
    {
        this.tweens.add({

            onStart: function ()
            {
                text.setText('FADE OUT SPRITE');
            },

            targets: audioSprite,
            volume: 0,

            ease: 'Linear',
            duration: 2000,

            onComplete: function()
            {
                audioSprite.volume = 1;
                audioSprite.stop();

                fn();
            }
        });
    }
];

function create ()
{
    first = this.sound.add('CatAstroPhi', { loop: true });
    second = this.sound.add('CatAstroPhi', { loop: true });
    audioSprite = this.sound.addAudioSprite('sfx');

    enableInput.bind(this)();
}

function chain(i)
{
    return function()
    {
        if (tests[i])
        {
            tests[i].bind(this)(chain.bind(this)(++i));
        }
        else
        {
            text.setText('COMPLETE!');

            this.time.addEvent({
                delay: 5000,
                callback: enableInput,
                callbackScope: this
            });
        }
    }.bind(this);
}

function enableInput()
{
    text.setText('CLICK TO START');

    this.input.once('pointerdown', function (pointer)
    {
        tests[0].bind(this)(chain.bind(this)(1));
    }, this);
}
