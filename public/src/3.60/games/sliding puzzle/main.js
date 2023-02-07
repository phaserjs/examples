import Preloader from './Preloader.js';
import MainMenu from './MainMenu.js';
import Game from './Game.js';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#002157',
    parent: 'phaser-example',
    scene: [ Preloader, MainMenu, Game ]
};

let game = new Phaser.Game(config);
