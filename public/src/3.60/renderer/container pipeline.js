// #module

import MultiColorPostPipeline from './assets/pipelines/MultiColorPost.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setPath('assets/tests/pipeline/');

        this.load.image('cake', 'cake.png');
        this.load.image('crab', 'crab.png');
        this.load.image('fish', 'fish.png');
        this.load.image('pudding', 'pudding.png');
    }

    create ()
    {
        const multiColorPipeline = this.renderer.pipelines.getPostPipeline('MultiColorPost');

        const layer = this.add.container();

        for (let i = 0; i < 32; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            layer.add(this.add.image(x, y, 'fish').setScale(0.5));
        }

        layer.setPostPipeline(multiColorPipeline);

        this.add.sprite(400, 300, 'crab');
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example,
    pipeline: { 'MultiColorPost': MultiColorPostPipeline }
};

let game = new Phaser.Game(config);
