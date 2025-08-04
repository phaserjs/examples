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
        card.filters.external.add(shine).setAutoTime(false).setProgress(0.5);

        this.add.tween({
            targets: shine,
            duration: 4000,
            repeatDelay: 800,
            repeat: -1,
            yoyo: true,
            ease: 'Quad.easeInOut',

            // Animated properties
            progress: 1.5,
        });
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
