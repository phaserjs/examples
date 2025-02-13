import SPRITE_KEYS from '../spriteKeys.js';

export class GameUi extends Phaser.Scene
{
    scoreText;
    keyText;

    score = 0;
    keys = 0;

    constructor()
    {
        super('GameUi');
    }

    preload ()
    {
        this.load.bitmapFont(SPRITE_KEYS.FONT_NOKIA16, 'assets/fonts/nokia16.png', 'assets/fonts/nokia16.xml');
        this.load.bitmapFont(SPRITE_KEYS.FONT_NOKIA, 'assets/fonts/nokia.png', 'assets/fonts/nokia.xml');
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
    }

    getKeys()
    {
        return this.keys;
    }
}
