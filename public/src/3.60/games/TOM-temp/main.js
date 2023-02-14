import Preloader from './Preloader.js';

import Play from './Play.js';
import Menu from './scenes/Menu.js';
import UI from './scenes/UI.js';

const config = {
    title: "TOM",
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 640,
    height: 360,
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 2000
            }
        }
    },
    scene: [
        Preloader,
        UI,
        Play,
        Menu
    ]
};

new Phaser.Game(config);
