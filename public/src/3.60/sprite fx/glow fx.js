// #module

import GlowSpriteFX from '../../fx/GlowSpriteFX.js';

export default class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('melon', 'assets/sprites/watermelon.png');
        this.load.image('yune', 'assets/sprites/yune.png');
        this.load.image('star', 'assets/sprites/star.png');
    }

    create ()
    {
        const pipeline = this.renderer.pipelines.add('GlowSpriteFX', new GlowSpriteFX(this.game, 0.5, 10));

        const melon = this.add.image(100, 300, 'melon');
        const yune = this.add.image(400, 350, 'yune');
        const star = this.add.image(700, 300, 'star');

        const text = this.add.text(100, 0, 'Hello World!').setFontFamily('Arial Black').setFontSize(96).setColor('#fff');

        melon.setPipeline(pipeline);
        yune.setPipeline(pipeline);
        star.setPipeline(pipeline);
        text.setPipeline(pipeline);

        star.setFXPadding(32);

        pipeline.color = 0xff00ff;

        this.tweens.add({
            targets: star,
            angle: 360,
            duration: 2000,
            repeat: -1
        });

        this.input.on('pointerdown', () => {

            if (pipeline.knockout)
            {
                pipeline.knockout = false;
            }
            else
            {
                pipeline.knockout = true;
            }

        });

        pipeline.outerStrength = 0;
        pipeline.innerStrength = 0;

        this.tweens.add({
            targets: pipeline,
            _innerStrength: 8,
            outerStrength: 8,
            yoyo: true,
            repeat: -1
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

const game = new Phaser.Game(config);
