// #module

import HueRotate from './assets/pipelines/HueRotate.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setPath('assets/tests/pipeline');

        this.load.image('fish', 'fish.png');
        this.load.image('crab', 'crab.png');
        this.load.image('flower', 'flower.png');
    }

    create ()
    {
        const hueRotatePipeline = this.renderer.pipelines.get('HueRotate');

        this.add.sprite(200, 300, 'fish').setPipeline(hueRotatePipeline);

        this.add.sprite(400, 300, 'flower').setPipeline(hueRotatePipeline);

        this.add.sprite(650, 300, 'crab').setPipeline(hueRotatePipeline);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example,
    pipeline: { 'HueRotate': HueRotate }
};

let game = new Phaser.Game(config);
