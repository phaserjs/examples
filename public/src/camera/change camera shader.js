// #module

import Bend from './assets/rendernodes/FilterBend.js';
import HueRotate from './assets/rendernodes/FilterHueRotate.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        const pic = this.add.image(400, 300, 'einstein');

        const main = this.cameras.main;
        const hueRotateController = main.filters.external.add(new HueRotate.Controller(main));
        const bendController = main.filters.external.add(new Bend.Controller(main));
        bendController.setActive(false);

        let shader = 1;

        this.input.on('pointerdown', () =>
        {
            shader = (shader + 1) % 4;

            bendController.setActive(shader === 2 || shader === 3);
            hueRotateController.setActive(shader === 1 || shader === 3);
        });

        this.tweens.add({
            targets: pic,
            angle: 360,
            ease: 'Linear',
            duration: 6000,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example,
    renderNodes: {
        FilterBend: Bend.Filter,
        FilterHueRotate: HueRotate.Filter
    },
};

let game = new Phaser.Game(config);
