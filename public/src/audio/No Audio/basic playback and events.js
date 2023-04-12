class Example extends Phaser.Scene
{
    tests = [

        function (fn)
        {
            this.first.once('play', function (sound)
            {
                this.text.setText('Playing');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.play();
        },

        function (fn)
        {
            this.first.once('pause', function (sound)
            {
                this.text.setText('Paused');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.pause();
        },

        function (fn)
        {
            this.first.once('resume', function (sound)
            {
                this.text.setText('Resuming');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.resume();
        },

        function (fn)
        {
            this.first.once('stop', function (sound)
            {
                this.text.setText('Stopped');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.stop();
        },

        function (fn)
        {
            this.first.once('play', function (sound)
            {
                this.text.setText('Play from start');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.play();
        },

        function (fn)
        {
            this.first.once('rate', function (sound, value)
            {
                this.text.setText('Speed up rate');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.rate = 1.5;
        },

        function (fn)
        {
            this.first.once('detune', function (sound, value)
            {
                this.text.setText('Speed up detune');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.detune = 600;
        },

        function (fn)
        {
            this.first.once('rate', function (sound, value)
            {
                this.text.setText('Slow down rate');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.rate = 1;
        },

        function (fn)
        {
            this.first.once('detune', function (sound, value)
            {
                this.text.setText('Slow down detune');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.detune = 0;
        },

        function (fn)
        {
            this.tweens.add({

                onStart: function ()
                {
                    this.text.setText('Fade out');
                },

                targets: this.first,
                volume: 0,

                ease: 'Linear',
                duration: 2000,

                onComplete: fn
            });
        },

        function (fn)
        {
            this.tweens.add({

                onStart: function ()
                {
                    this.text.setText('Fade in');
                },

                targets: this.first,
                volume: 1,

                ease: 'Linear',
                duration: 2000,

                onComplete: fn
            });
        },

        function (fn)
        {
            this.first.once('mute', function ()
            {
                this.text.setText('Mute');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.mute = true;
        },

        function (fn)
        {
            this.first.once('mute', function ()
            {
                this.text.setText('Unmute');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.mute = false;
        },

        function (fn)
        {
            this.first.once('volume', function ()
            {
                this.text.setText('Half volume');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.volume = 0.5;
        },

        function (fn)
        {
            this.first.once('volume', function ()
            {
                this.text.setText('Full volume');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.volume = 1;
        },

        function (fn)
        {
            this.first.once('seek', function ()
            {
                this.text.setText('Seek to start');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.first.seek = 0;
        },

        function (fn)
        {
            this.second.once('play', function ()
            {
                this.text.setText('Play 2nd');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.second.play();
        },

        function (fn)
        {
            this.sound.once('mute', function (soundManager, value)
            {
                this.text.setText('Mute global');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.sound.mute = true;
        },

        function (fn)
        {
            this.sound.once('mute', function (soundManager, value)
            {
                this.text.setText('Unmute global');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.sound.mute = false;
        },

        function (fn)
        {
            this.sound.once('volume', function (soundManager, value)
            {
                this.text.setText('Half volume global');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.sound.volume = 0.5;
        },

        function (fn)
        {
            this.tweens.add({

                onStart: function ()
                {
                    this.text.setText('Fade out global');
                },

                targets: this.sound,
                volume: 0,

                ease: 'Linear',
                duration: 2000,

                onComplete: fn
            });
        },

        function (fn)
        {
            this.tweens.add({

                onStart: function ()
                {
                    this.text.setText('Fade in global');
                },

                targets: this.sound,
                volume: 1,

                ease: 'Linear',
                duration: 2000,

                onComplete: fn
            });
        },

        function (fn)
        {
            this.sound.once('pauseall', function (soundManager)
            {
                this.text.setText('Pause all');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.sound.pauseAll();
        },

        function (fn)
        {
            this.sound.once('resumeall', function (soundManager)
            {
                this.text.setText('Resume all');
                this.time.addEvent({
                    delay: 2000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.sound.resumeAll();
        },

        function (fn)
        {
            this.sound.once('stopall', function (soundManager)
            {
                this.text.setText('Stop all');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.sound.stopAll();
        },

        function (fn)
        {
            this.audioSprite.once('play', function (sound)
            {
                this.text.setText('Play sprite');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.audioSprite.play('07');
        },

        function (fn)
        {
            this.audioSprite.once('pause', function (sound)
            {
                this.text.setText('Pause sprite');
                this.time.addEvent({
                    delay: 1000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.audioSprite.pause();
        },

        function (fn)
        {
            this.audioSprite.once('resume', function (sound)
            {
                this.text.setText('Resume sprite');
                this.time.addEvent({
                    delay: 1500,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.audioSprite.resume();
        },

        function (fn)
        {
            this.audioSprite.once('play', function (sound)
            {
                this.text.setText('Multiple sprites');
                this.time.addEvent({
                    delay: 10000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            const sounds = [ '01', '02', '03', '03', '05' ];

            for (let i = 0; i < sounds.length; i++)
            {
                this.time.addEvent({
                    delay: i * 2000,
                    callback: this.audioSprite.play.bind(this.audioSprite, sounds[i]),
                    callbackScope: this.audioSprite
                });
            }
        },

        function (fn)
        {
            this.audioSprite.once('play', function (sound)
            {
                this.text.setText('Loop sprite');
                this.time.addEvent({
                    delay: 4000,
                    callback: fn,
                    callbackScope: this
                });
            }, this);

            this.audioSprite.play('06', {
                loop: true
            });
        },

        function (fn)
        {
            this.tweens.add({

                onStart: function ()
                {
                    this.text.setText('Fade out sprite');
                },

                targets: this.audioSprite,
                volume: 0,

                ease: 'Linear',
                duration: 4000,

                onComplete: function ()
                {
                    this.audioSprite.volume = 1;
                    this.audioSprite.stop();

                    fn();
                }
            });
        }
    ];

    audioSprite;
    second;
    first;
    text;

    preload ()
    {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
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

    create ()
    {
        this.sound.pauseOnBlur = false;

        const prometheus = this.add.image(400, 300, 'prometheus');
        prometheus.setScale(600 / prometheus.height);

        this.text = this.add.text(400, 300, 'Loading...', {
            fontFamily: '\'Sorts Mill Goudy\', serif',
            fontSize: 80,
            color: '#fff',
            align: 'center'
        });
        this.text.setOrigin(0.5);
        this.text.setShadow(0, 1, '#888', 2);

        this.first = this.sound.add('overture', { loop: true });
        this.second = this.sound.add('overture', { loop: true });
        this.audioSprite = this.sound.addAudioSprite('creatures');

        this.enableInput.call(this);
    }

    chain (i)
    {
        return () =>
        {
            if (this.tests[i])
            {
                this.tests[i].call(this, this.chain.call(this, ++i));
            }
            else
            {
                this.text.setText('Complete!');

                this.time.addEvent({
                    delay: 5000,
                    callback: this.enableInput,
                    callbackScope: this
                });
            }
        };
    }

    enableInput ()
    {
        this.text.setText('Click to start');

        this.input.once('pointerdown', function (pointer)
        {
            this.tests[0].call(this, this.chain.call(this, 1));
        }, this);
    }
}

/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 *
 * Prometheus Brings Fire To Mankind - Painting by Heinrich Füger, 1817, Public Domain
 * The Creatures of Prometheus, Op. 43, Overture - Music by Ludwig van Beethoven, 1801, Public Domain
 */

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
    audio: {
        noAudio: true
    }
};

const game = new Phaser.Game(config);
