import Game from './Game.js';
import Preloader from './Preloader.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#002157',
    parent: 'phaser-example',
    scene: [ Preloader, Game ]
};

let game = new Phaser.Game(config);
