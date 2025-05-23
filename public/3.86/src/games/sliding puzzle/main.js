import Game from './Game.js';
import MainMenu from './MainMenu.js';
import Preloader from './Preloader.js';
import ShinePostFX from './ShinePostFX.js';
import WipePostFX from './WipePostFX.js';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#002157',
    parent: 'phaser-example',
    scene: [ Preloader, MainMenu, Game ],
    pipeline: { ShinePostFX, WipePostFX }
};

let game = new Phaser.Game(config);
