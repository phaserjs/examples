// #module

import AddGrayscale from './assets/rendernodes/AddGrayscale.js';

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
        this.grayscaleBatchHandler = AddGrayscale(renderNodeManager);

        this.add.sprite(100, 300, 'pudding');
        
        const crab = this.add.sprite(400, 300, 'crab').setScale(1.5);
        crab.setRenderNodeRole('BatchHandler', this.grayscaleBatchHandler);

        this.fish = this.add.sprite(400, 300, 'fish');
        this.fish.setRenderNodeRole('BatchHandler', this.grayscaleBatchHandler);

        this.add.sprite(700, 300, 'cake');

        this.input.on('pointermove', pointer => {

            this.fish.x = pointer.worldX;
            this.fish.y = pointer.worldY;

        });

        this.gray = 1;
        this.tweens.add({
            targets: this,
            gray: 0,
            yoyo: true,
            repeat: -1,
            delay: 2000,
            repeatDelay: 2000,
            duration: 2000,
            ease: 'Sine.easeInOut',
            onUpdate: () => {
                this.grayscaleBatchHandler.programManager.setUniform('uGray', this.gray);
            }
        });
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
