class Example extends Phaser.Scene
{
    bass;
    gui;
    bitmapFont;
    bottomSpeaker;
    middleSpeaker;
    topRightSpeaker;
    topLeftSpeaker;

    preload ()
    {
        this.load.bitmapFont('atari-classic', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');

        this.load.image('streets', 'assets/sprites/cyberpunk-street.png');

        this.load.atlas('speakers', 'assets/sprites/speakers/speakers.png', 'assets/sprites/speakers/speakers.json');

        this.load.audio('bass', [ 'assets/audio/tech/bass.ogg', 'assets/audio/tech/bass.mp3' ]);
        this.load.audio('drums', [ 'assets/audio/tech/drums.ogg', 'assets/audio/tech/drums.mp3' ]);
        this.load.audio('percussion', [ 'assets/audio/tech/percussion.ogg', 'assets/audio/tech/percussion.mp3' ]);
        this.load.audio('synth1', [ 'assets/audio/tech/synth1.ogg', 'assets/audio/tech/synth1.mp3' ]);
        this.load.audio('synth2', [ 'assets/audio/tech/synth2.ogg', 'assets/audio/tech/synth2.mp3' ]);
        this.load.audio('top1', [ 'assets/audio/tech/top1.ogg', 'assets/audio/tech/top1.mp3' ]);
        this.load.audio('top2', [ 'assets/audio/tech/top2.ogg', 'assets/audio/tech/top2.mp3' ]);
    }

    create ()
    {
        /*
         * These values are used to compensate for lags, caused by
         * time difference between calling play method on an audio
         * tag element and it actually staring to play audio and
         * changing audio tag playback position, in order to achieve
         * gapless looping and precise delayed playback.
         *
         * You might need to tweak this value to get the desired results
         * since lags vary depending on the browser/platform.
         */
        this.sound.audioPlayDelay = 0.1;
        this.sound.loopEndOffset = 0.05;

        const streets = this.add.image(0, 0, 'streets');
        streets.setScale(600 / 192);
        streets.setOrigin(0);

        this.topLeftSpeaker = this.add.image(445, 332, 'speakers', 'top-left');
        this.topLeftSpeaker.setOrigin(1, 0.46);
        this.topRightSpeaker = this.add.image(445, 332, 'speakers', 'top-right');
        this.topRightSpeaker.setOrigin(0, 0.975);
        this.middleSpeaker = this.add.image(443, 417, 'speakers', 'middle');
        this.middleSpeaker.setOrigin(0.5, 1);
        this.bottomSpeaker = this.add.image(443, 504, 'speakers', 'bottom');
        this.bottomSpeaker.setOrigin(0.5, 1);

        this.bass = this.sound.add('bass');
        const drums = this.sound.add('drums');
        const percussion = this.sound.add('percussion');
        const synth1 = this.sound.add('synth1');
        const synth2 = this.sound.add('synth2');
        const top1 = this.sound.add('top1');
        const top2 = this.sound.add('top2');

        this.gui = new dat.GUI();
        const sm = this.gui.addFolder('Sound Manager');
        sm.add(this.sound, 'rate', 0.5, 2).listen();
        sm.add(this.sound, 'detune', -1200, 1200).step(50).listen();

        const loopMarker = {
            name: 'loop',
            start: 0,
            duration: 7.68,
            config: {
                loop: true
            }
        };

        if (this.sound.locked)
        {
            const text = this.add.bitmapText(400, 70, 'atari-classic', 'Tap to start', 40);
            text.x -= Math.round(text.width / 2);
            text.y -= Math.round(text.height / 2);

            this.sound.once('unlocked', function (soundManager)
            {
                text.visible = false;

                this.startStem.call(this, this.bass, 'Bass', this.bottomSpeaker);

            }, this);
        }
        else
        {
            this.startStem.call(this, this.bass, 'Bass', this.bottomSpeaker);
        }

        this.bass.addMarker(loopMarker);

        // Delay option can only be passed in config
        this.bass.play('loop', {
            delay: 0
        });

        // Below won't work

        // sound.delay = delay;
        // sound.play('loop');

        this.bass.once('looped', function (sound)
        {
            this.startStem.call(this, drums, 'Drums', this.middleSpeaker);
        }, this);

        drums.addMarker(loopMarker);
        drums.play('loop', {
            delay: loopMarker.duration
        });
        drums.once('looped', function (sound)
        {
            this.startStem.call(this, percussion, 'Percussion', this.middleSpeaker);
        }, this);

        percussion.addMarker(loopMarker);
        percussion.play('loop', {
            delay: loopMarker.duration * 2
        });
        percussion.once('looped', function (sound)
        {
            this.startStem.call(this, synth1, 'Synth 1', this.topRightSpeaker);
        }, this);

        synth1.addMarker(loopMarker);
        synth1.play('loop', {
            delay: loopMarker.duration * 3
        });
        synth1.once('looped', function (sound)
        {
            this.startStem.call(this, synth2, 'Synth 2', this.topRightSpeaker);
        }, this);

        synth2.addMarker(loopMarker);
        synth2.play('loop', {
            delay: loopMarker.duration * 4
        });
        synth2.once('looped', function (sound)
        {
            this.startStem.call(this, top1, 'Top 1', this.topLeftSpeaker);
        }, this);

        top1.addMarker(loopMarker);
        top1.play('loop', {
            delay: loopMarker.duration * 5
        });
        top1.once('looped', function (sound)
        {
            this.startStem.call(this, top2, 'Top 2', this.topLeftSpeaker);
            sm.open();
        }, this);

        top2.addMarker(loopMarker);
        top2.play('loop', {
            delay: loopMarker.duration * 6
        });
    }

    update ()
    {
        this.middleSpeaker.y = this.bottomSpeaker.y - this.bottomSpeaker.height * this.bottomSpeaker.scaleY;
        this.topLeftSpeaker.y =
            this.topRightSpeaker.y =
                this.middleSpeaker.y - this.middleSpeaker.height * this.middleSpeaker.scaleY;

        this.tweens.setGlobalTimeScale(this.bass.totalRate);
    }

    startStem (stem, text, speaker)
    {
        const s = this.gui.addFolder(text);
        s.add(stem, 'seek', 0, stem.duration).step(0.01).listen();
        s.add(stem, 'mute').listen();
        s.open();

        this.tweens.add({
            targets: speaker,
            scaleX: 1.3,
            scaleY: 1.1,

            duration: 241,

            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
    }
}

/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 *
 * Cyberpunk Street Environment by Luis Zuno (https://www.patreon.com/posts/8303915) / CC-BY-3.0
 */

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#838282',
    scene: Example,
    pixelArt: true,
    audio: {
        disableWebAudio: true
    }
};

const game = new Phaser.Game(config);
