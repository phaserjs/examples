class SceneA extends Phaser.Scene
{
    jungle;

    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.audio('jungle', [
            'assets/audio/jungle.ogg',
            'assets/audio/jungle.mp3'
        ]);

        this.load.image('wizball', 'assets/sprites/wizball.png');

        this.load.bitmapFont('atari-classic', 'assets/fonts/bitmap/atari-classic.png', 'assets/fonts/bitmap/atari-classic.xml');
    }

    create ()
    {
        console.log('SceneA');

        const text = this.add.bitmapText(400, 100, 'atari-classic', '', 30)
            .setOrigin(0.5);

        this.add.image(400, 300, 'wizball');

        this.jungle = this.sound.add('jungle');

        this.jungle.play({
            loop: true
        });

        if (this.sound.locked)
        {
            text.setText('Tap to unlock\nand play music');

            this.sound.once('unlocked', function (soundManager)
            {
                this.setupSceneInput(text);

            }, this);
        }
        else
        {
            this.setupSceneInput(text);
        }
    }

    setupSceneInput (text)
    {
        text.setText(' Tap to load and play\nmusic from child scene');

        this.input.once('pointerup', function ()
        {

            this.jungle.stop();

            this.scene.start('sceneB');

        }, this);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.audio('theme', [
            'assets/audio/oedipus_wizball_highscore.ogg',
            'assets/audio/oedipus_wizball_highscore.mp3'
        ]);
    }

    create ()
    {
        console.log('SceneB');

        this.scene.start('sceneC');
    }
}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }

    create ()
    {
        console.log('SceneC');

        this.add.image(400, 300, 'wizball').setScale(4);

        const music = this.sound.add('theme');

        music.play({
            loop: true
        });

        if (this.sound.locked)
        {
            const text = this.add.bitmapText(400, 100, 'atari-classic',
                'Tap to unlock and play\nmusic from child scene', 30)
                .setOrigin(0.5);

            this.sound.once('unlocked', soundManager =>
            {
                text.visible = false;

            }, this);
        }

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    audio: {
        disableWebAudio: true
    },
    scene: [ SceneA, SceneB, SceneC ]
};

const game = new Phaser.Game(config);
