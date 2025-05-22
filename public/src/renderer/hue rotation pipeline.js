// #module

import AddHueRotate from './assets/rendernodes/AddHueRotate.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.setPath('assets/tests/pipeline/');

        this.load.image('cake', 'cake.png');
        this.load.image('crab', 'crab.png');
        this.load.image('fish', 'fish.png');
        this.load.image('pudding', 'pudding.png');
    }

    create ()
    {
        const renderNodeManager = this.renderer.renderNodes;
        this.hueRotateBatchHandler = AddHueRotate(renderNodeManager);

        this.add.sprite(100, 300, 'pudding').setRenderNodeRole('BatchHandler', this.hueRotateBatchHandler);

        const crab = this.add.sprite(400, 300, 'crab').setScale(1.5);
        crab.setRenderNodeRole('BatchHandler', this.hueRotateBatchHandler);

        this.fish = this.add.sprite(400, 300, 'fish');
        this.fish.setRenderNodeRole('BatchHandler', this.hueRotateBatchHandler);

        this.add.sprite(700, 300, 'cake').setRenderNodeRole('BatchHandler', this.hueRotateBatchHandler);

        this.input.on('pointermove', pointer => {

            this.fish.x = pointer.worldX;
            this.fish.y = pointer.worldY;

        });

        this.hue = 0;
    }

    update () {
        this.hue += 0.01;

        this.hueRotateBatchHandler.programManager.setUniform('uHue', this.hue);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
