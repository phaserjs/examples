import Game from './Game.js';
import MainMenu from './MainMenu.js';
import Preloader from './Preloader.js';
import FilterShine from './FilterShine.js';
import FilterWipe from './FilterWipe.js';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    backgroundColor: '#002157',
    parent: 'phaser-example',
    scene: [ Preloader, MainMenu, Game ],
    renderNodes: {
        FilterShine: FilterShine.Filter,
        FilterWipe: FilterWipe.Filter
    }
};

let game = new Phaser.Game(config);
