// #module

import FilterWipe from "./assets/rendernodes/FilterWipe.js";

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('pyramid', 'assets/sprites/pyramid.png');
        this.load.image('bg', 'assets/skies/space4.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const sprite = this.add.image(400, 300, 'pyramid');

        const wipe = new FilterWipe.Controller(this.cameras.main);
        sprite.enableFilters();
        sprite.filters.internal.add(wipe);
        wipe.setRevealEffect();
        wipe.setTopToBottom();

        this.tweens.add({
            targets: wipe,
            progress: 1,
            repeatDelay: 1000,
            hold: 1000,
            yoyo: true,
            repeat: -1,
            duration: 2000
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example,
    renderNodes: {
        FilterWipe: FilterWipe.Filter
    }
};

let game = new Phaser.Game(config);
