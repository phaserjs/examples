import AUDIO_KEYS from '../audioKeys.js';
import SPRITE_KEYS from '../spriteKeys.js';

export class GameUi extends Phaser.Scene
{
    scoreText;
    keyText;

    score = 0;
    keys = 0;

    audio = {};

    constructor()
    {
        super('GameUi');
    }

    preload ()
    {
        this.load.bitmapFont(SPRITE_KEYS.FONT_NOKIA16, 'assets/fonts/nokia16.png', 'assets/fonts/nokia16.xml');
        this.load.bitmapFont(SPRITE_KEYS.FONT_NOKIA, 'assets/fonts/nokia.png', 'assets/fonts/nokia.xml');

        this.load.audio(AUDIO_KEYS.PLAYER_STEP, 'assets/audio/step.ogg');
        this.load.audio(AUDIO_KEYS.PLAYER_JUMP, 'assets/audio/jump.mp3');
        this.load.audio(AUDIO_KEYS.COIN, 'assets/audio/coin.ogg');
        this.load.audio(AUDIO_KEYS.KEY, 'assets/audio/key.ogg');
        this.load.audio(AUDIO_KEYS.STAR, 'assets/audio/star.ogg');
    }

    create ()
    {
        const background = this.add.graphics();
        // set a fill and line style
        background.fillStyle(0x000000);
        background.fillRect(0, 0, this.scale.width, 40);

        this.scoreText = this.add.bitmapText(10, 4, SPRITE_KEYS.FONT_NOKIA, 'Score: 0');
        this.keyText = this.add.bitmapText(this.scale.width - 75, 4, SPRITE_KEYS.FONT_NOKIA, 'x 0');

        //  Grab a reference to the Game Scene
        const gameScene = this.scene.get('Game');

        //  Listen for events from it
        gameScene.events.on('updateScore', function (points) 
        {
            this.score += points;
            this.scoreText.text = `Score: ${this.score}`;
        }, this);

        //  Listen for events from it
        gameScene.events.on('updateKeys', function (keys) 
        {
            this.keys += keys;
            this.keyText.text = `x ${this.keys}`;
        }, this);

        const keyIcon = this.add.image(this.scale.width - 100, 20, SPRITE_KEYS.FANTASY_TILES, 51);

        this.initAudio();
    }

    initAudio()
    {
        this.audio[AUDIO_KEYS.PLAYER_STEP] = this.sound.add(AUDIO_KEYS.PLAYER_STEP);
        this.audio[AUDIO_KEYS.PLAYER_JUMP] = this.sound.add(AUDIO_KEYS.PLAYER_JUMP);
        this.audio[AUDIO_KEYS.COIN] = this.sound.add(AUDIO_KEYS.COIN);
        this.audio[AUDIO_KEYS.KEY] = this.sound.add(AUDIO_KEYS.KEY);
        this.audio[AUDIO_KEYS.STAR] = this.sound.add(AUDIO_KEYS.STAR);
    }

    playAudio(key, overlap = true)
    {
        if (!overlap && this.audio[key].isPlaying) return;

        this.audio[key].play();
    }

    getKeys()
    {
        return this.keys;
    }
}
