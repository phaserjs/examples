import { Boot } from './scenes/Boot.js';
import { Game } from './scenes/Game.js';
import { GameOver } from './scenes/GameOver.js';
import { MainMenu } from './scenes/MainMenu.js';
import { Preloader } from './scenes/Preloader.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ]
};

let game = new Phaser.Game(config);