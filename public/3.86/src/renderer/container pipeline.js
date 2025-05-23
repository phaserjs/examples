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
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
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

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(-99, 900);
            const y = Phaser.Math.Between(-99, 700);

            layer.add(this.add.image(x, y, 'fish').setScale(Phaser.Math.FloatBetween(0.25, 0.5)));
        }

        layer.setPostPipeline(multiColorPipeline);

        this.fish = layer;

        this.add.sprite(400, 300, 'crab');
    }

    update ()
    {
        this.fish.getAll().forEach(child => {
            
            child.x -= 1;
            child.y -= 1;

            if (child.x < -100)
            {
                child.x = 900;
            }

            if (child.y < -100)
            {
                child.y = 700;
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
    scene: Example,
    pipeline: { 'MultiColorPost': MultiColorPostPipeline }
};

let game = new Phaser.Game(config);
