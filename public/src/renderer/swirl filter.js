// #module

import FilterSwirl from '../assets/rendernodes/FilterSwirl.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('bg', 'assets/skies/pixelback1.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const swirlController = new FilterSwirl.Controller(this.cameras.main);
        console.log(swirlController);
        swirlController.strength = 0.75;
        swirlController.coords = [0.5, 0.5];
        swirlController.radius = 0.25;
        swirlController.resolution = [this.sys.game.config.width, this.sys.game.config.height];

        const logo = this.add.image(400, 300, 'logo');
        logo.enableFilters();
        logo.filters.external.add(swirlController);

        // Animate the swirl angle (x property)
        this.tweens.add({
            targets: swirlController,
            strength: 1,
            repeat: -1,
            duration: 5000,
            ease: 'Sine.inOut',
            yoyo: true
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example,
    renderNodes: {
        FilterSwirl: FilterSwirl.Filter
    }
};

let game = new Phaser.Game(config);
