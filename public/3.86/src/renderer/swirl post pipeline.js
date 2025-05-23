// #module

import SwirlPostPipeline from './assets/pipelines/SwirlPostPipeline.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('bg', 'assets/skies/pixelback1.jpg');
     }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const logo = this.add.image(400, 300, 'logo');

        logo.setPostPipeline('Swirl');

        const pipeline = logo.getPostPipeline('Swirl');

        pipeline.x = 0;
        pipeline.strength = 0.75;

        this.tweens.add({
            targets: pipeline,
            x: 1,
            repeat: -1,
            duration: 5000,
            ease: 'Sine.inOut',
            yoyo: true
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
    pipeline: { 'Swirl': SwirlPostPipeline }
};

let game = new Phaser.Game(config);
