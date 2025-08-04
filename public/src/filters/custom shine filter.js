// #module

import FilterShine from "./assets/rendernodes/FilterShine.js";

class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('card', 'assets/games/card-memory-game/cards/card-4.png');
    }

    create ()
    {
        const card = this.add.image(this.sys.scale.width / 2, this.sys.scale.height / 2, 'card');

        card.setScale(2)

        const shine = new FilterShine.Controller(this.cameras.main);
        card.enableFilters();
        card.filters.external.add(shine);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2f3640',
    parent: 'phaser-example',
    scene: Example,
    renderNodes: {
        FilterShine: FilterShine.Filter
    }
};

const game = new Phaser.Game(config);
