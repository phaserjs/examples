export default class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');
        const box = this.add.image(512, 384, 'box');

        const emitter = this.add.particles(0, 0, 'spark', {
            scale: 0.25,
            lifespan: 10000,
            gravityX: 40,
            gravityY: -50,
            frequency: 50,
            rotate: { start: 0, end: 360 },
            maxVelocityX: 200,
            maxVelocityY: 200,
            blendMode: 'ADD'
        });

        const shape1 = new Phaser.Geom.Rectangle(-300, 768, 1078+600, 128);

        emitter.addEmitZone({ type: 'random', source: shape1 });

        emitter.createGravityWell({
            x: 600,
            y: 200,
            power: 4.2,
            epsilon: 400,
            gravity: 100
        });

        const logo = this.add.image(512, -384, 'logo');

        box.setPostPipeline('WipePostFX');
        logo.setPostPipeline('ShinePostFX');

        const pipeline = box.getPostPipeline('WipePostFX');

        pipeline.setTopToBottom();
        pipeline.setRevealEffect();

        this.tweens.add({
            targets: pipeline,
            progress: 1,
            duration: 3000
        });

        this.tweens.add({
            targets: logo,
            y: 384,
            delay: 1500,
            duration: 2000,
            ease: 'sine.out'
        });

        this.input.once('pointerdown', () => {

            pipeline.setWipeEffect();
            pipeline.setTexture('box-inside');

            this.tweens.add({
                targets: logo,
                alpha: 0,
                duration: 1000,
                ease: 'sine.out'
            });

            this.tweens.add({
                targets: pipeline,
                progress: 1,
                duration: 2500,
                onComplete: () => {
                    this.scene.start('Game');
                }
            });
        });
    }
}
