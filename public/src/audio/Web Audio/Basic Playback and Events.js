/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 */

var config = {
    type: Phaser.WEBGL,
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
        first.events.once('SOUND_PLAY', function ()
        {
            text.setText('PLAYING');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.play();
    },

    function (fn)
    {
        first.events.once('SOUND_PAUSE', function ()
        {
            text.setText('PAUSED');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.pause();
    },

    function(fn)
    {
        first.events.once('SOUND_RESUME', function ()
        {
            text.setText('RESUMING');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.resume();
    },

    function(fn)
    {
        first.events.once('SOUND_STOP', function ()
        {
            text.setText('STOPPED');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.stop();
    },

    function(fn)
    {
        first.events.once('SOUND_PLAY', function ()
        {
            text.setText('PLAY FROM\nSTART');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.play();
    },

    function(fn)
    {
        first.events.once('SOUND_RATE', function ()
        {
            text.setText('SPEED UP\nRATE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.rate = 1.5;
    },

    function(fn)
    {
        first.events.once('SOUND_DETUNE', function ()
        {
            text.setText('SPEED UP\nDETUNE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.detune = 600;
    },

    function(fn)
    {
        first.events.once('SOUND_RATE', function ()
        {
            text.setText('SLOW DOWN\nRATE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.rate = 1;
    },

    function(fn)
    {
        first.events.once('SOUND_DETUNE', function ()
        {
            text.setText('SLOW DOWN\nDETUNE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

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
        first.events.once('SOUND_MUTE', function()
        {
            text.setText('MUTE');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.mute = true;
    },

    function(fn)
    {
        first.events.once('SOUND_MUTE', function()
        {
            text.setText('UNMUTE');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.mute = false;
    },

    function(fn)
    {
        first.events.once('SOUND_VOLUME', function()
        {
            text.setText('HALF VOLUME');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.volume = 0.5;
    },

    function(fn)
    {
        first.events.once('SOUND_VOLUME', function()
        {
            text.setText('FULL VOLUME');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.volume = 1;
    },

    function(fn)
    {
        first.events.once('SOUND_SEEK', function()
        {
            text.setText('SEEK TO START');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        first.seek = 0;
    },

    function(fn)
    {
        second.events.once('SOUND_PLAY', function()
        {
            text.setText('PLAY 2ND');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        second.play();
    },

    function(fn)
    {
        this.game.sound.events.once('SOUND_MUTE', function ()
        {
            text.setText('MUTE GLOBAL');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        this.game.sound.mute = true;
    },

    function(fn)
    {
        this.game.sound.events.once('SOUND_MUTE', function ()
        {
            text.setText('UNMUTE GLOBAL');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        this.game.sound.mute = false;
    },

    function(fn)
    {
        this.game.sound.events.once('SOUND_VOLUME', function ()
        {
            text.setText('HALF VOLUME\nGLOBAL');
            this.time.addEvent({
                delay: 2000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        this.game.sound.volume = 0.5;
    },

    function(fn)
    {
        this.tweens.add({

            onStart: function ()
            {
                text.setText('FADE OUT\nGLOBAL');
            },

            targets: this.game.sound,
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

            targets: this.game.sound,
            volume: 1,

            ease: 'Linear',
            duration: 2000,

            onComplete: fn
        });
    },

    function(fn)
    {
        second.events.once('SOUND_STOP', function ()
        {
            text.setText('STOP ALL');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        this.game.sound.stopAll();
    },

    function(fn)
    {
        audioSprite.events.once('SOUND_PLAY', function ()
        {
            text.setText('PLAY SPRITE');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        audioSprite.play('death');
    },

    function(fn)
    {
        audioSprite.events.once('SOUND_PAUSE', function ()
        {
            text.setText('PAUSE SPRITE');
            this.time.addEvent({
                delay: 1000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        audioSprite.pause();
    },

    function(fn)
    {
        audioSprite.events.once('SOUND_RESUME', function ()
        {
            text.setText('RESUME SPRITE');
            this.time.addEvent({
                delay: 1500,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

        audioSprite.resume();
    },

    function(fn)
    {
        audioSprite.events.once('SOUND_PLAY', function ()
        {
            text.setText('MULTIPLE\nSPRITES');
            this.time.addEvent({
                delay: 3000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

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
        audioSprite.events.once('SOUND_PLAY', function ()
        {
            text.setText('LOOP SPRITE');
            this.time.addEvent({
                delay: 3000,
                callback: fn,
                callbackScope: this
            });
        }.bind(this));

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
    first = this.game.sound.add('CatAstroPhi', { loop: true });
    second = this.game.sound.add('CatAstroPhi', { loop: true });
    audioSprite = this.game.sound.addAudioSprite('sfx');

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

    this.input.events.once('POINTER_DOWN_EVENT', function ()
    {
        tests[0].bind(this)(chain.bind(this)(1));
    }.bind(this));
}
