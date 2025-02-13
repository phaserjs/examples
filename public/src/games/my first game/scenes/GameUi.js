import { Player } from '../gameObjects/Player.js';
import { Star } from '../gameObjects/Star.js';
import { Bomb } from '../gameObjects/Bomb.js';
import { Platform } from '../gameObjects/Platform.js';
import { MysteryBox } from '../gameObjects/MysteryBox.js';
import { TreasureBox } from '../gameObjects/TreasureBox.js';
import { Coin } from '../gameObjects/Coin.js';
import { Key } from '../gameObjects/Key.js';
import { Score } from '../gameObjects/Score.js';

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
        this.load.bitmapFont('nokia16', 'assets/fonts/nokia16.png', 'assets/fonts/nokia16.xml');
        this.load.bitmapFont('nokia', 'assets/fonts/nokia.png', 'assets/fonts/nokia.xml');
    }

    create ()
    {
        const background = this.add.graphics();
        // set a fill and line style
        background.fillStyle(0x000000);
        background.fillRect(0, 0, this.scale.width, 40);

        this.scoreText = this.add.bitmapText(10, 4, 'nokia', 'Score: 0');
        this.keyText = this.add.bitmapText(this.scale.width - 75, 4, 'nokia', 'x 0');

        //  Grab a reference to the Game Scene
        let gameScene = this.scene.get('Game');

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

        const keyIcon = this.add.image(this.scale.width - 100, 20, 'fantasy', 51);
    }
}
