// #module

import FilterHueRotate from './assets/rendernodes/FilterHueRotate.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.setPath('assets/tests/pipeline');

        this.load.image('fish', 'fish.png');
        this.load.image('crab', 'crab.png');
        this.load.image('flower', 'flower.png');
    }

    create ()
    {
        this.add.sprite(200, 300, 'fish').enableFilters().filters.internal.add(new FilterHueRotate.Controller(this.cameras.main));

        this.add.sprite(400, 300, 'flower').enableFilters().filters.internal.add(new FilterHueRotate.Controller(this.cameras.main));

        this.add.sprite(650, 300, 'crab').enableFilters().filters.internal.add(new FilterHueRotate.Controller(this.cameras.main));
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example,
    renderNodes: { 'FilterHueRotate': FilterHueRotate.Filter }
};

let game = new Phaser.Game(config);
