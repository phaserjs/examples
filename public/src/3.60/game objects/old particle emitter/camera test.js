class Example extends Phaser.Scene
{
    shakeCamera;
    flashCamera;
    fadeCamera;
    spark1 = null;
    spark0 = null;
    whiteSmoke = null;
    fire = null;
    darkSmoke = null;

    preload ()
    {
        this.load.image('dark-smoke', 'assets/particles/smoke-puff.png');
        this.load.image('white-smoke', 'assets/particles/smoke0.png');
        this.load.image('fire', 'assets/particles/muzzleflash3.png');
        this.load.image('spark0', 'assets/particles/blue.png');
        this.load.image('spark1', 'assets/particles/red.png');
    }

    create ()
    {
        this.cameras.main.setViewport(5, 5, 390, 290);
        this.fadeCamera = this.cameras.add(405, 5, 390, 290);
        this.flashCamera = this.cameras.add(5, 305, 390, 290);
        this.shakeCamera = this.cameras.add(405, 305, 390, 290);

        this.fadeCamera.fade(1000);

        this.spark0 = this.add.particles('spark0').createEmitter({
            x: 400,
            y: 300,
            speed: { min: -500, max: 500 },
            angle: { min: -120, max: -60},
            scale: { min: 0.05, max: 0},
            alpha: { min: 1, max: 0},
            gravityY: 500,
            lifespan: 1
        });
        this.spark0.reserve(1000);

        this.spark1 = this.add.particles('spark1').createEmitter({
            x: 400,
            y: 300,
            speed: { min: -100, max: 100 },
            angle: { min: -120, max: -60},
            scale: { start: 0, end: 0.4},
            alpha: { start: 1, end: 0},
            blendMode: 'SCREEN',
            gravityY: 500,
            lifespan: 1000
        });
        this.spark1.reserve(1000);

        this.fire = this.add.particles('fire').createEmitter({
            x: 400,
            y: 300,
            speed: { min: 100, max: 200 },
            angle: { min: -85, max: -95},
            scale: { start: 0, end: 1},
            alpha: { start: 1, end: 0},
            blendMode: 'SCREEN',
            lifespan: 1000
        });
        this.fire.reserve(1000);

        this.whiteSmoke = this.add.particles('white-smoke').createEmitter({
            x: 400,
            y: 300,
            speed: { min: 20, max: 100 },
            angle: { min: 0, max: 360},
            scale: { start: 1, end: 0},
            alpha: { start: 0, end: 0.5},
            lifespan: 2000

            // active: false
        });
        this.whiteSmoke.reserve(1000);

        this.darkSmoke = this.add.particles('dark-smoke').createEmitter({
            x: 400,
            y: 300,
            speed: { min: 20, max: 100 },
            angle: { min: 0, max: 360},
            scale: { start: 1, end: 0},
            alpha: { start: 0, end: 0.1},
            blendMode: 'SCREEN',
            lifespan: 2000

            // active: false
        });
        this.darkSmoke.reserve(1000);

        this.fire.onParticleDeath(particle =>
        {
            this.darkSmoke.setPosition(particle.x, particle.y);
            this.whiteSmoke.setPosition(particle.x, particle.y);
            this.darkSmoke.emitParticle();
            this.whiteSmoke.emitParticle();
        });

        this.input.on('pointermove', pointer =>
        {
            this.darkSmoke.setPosition(pointer.x, pointer.y);
            this.fire.setPosition(pointer.x, pointer.y);
        });
    }

    update ()
    {
        this.spark0.x = this.fire.x;
        this.spark0.y = this.fire.y;
        this.spark1.x = this.fire.x;
        this.spark1.y = this.fire.y;

        this.flashCamera.flash(1000);
        this.shakeCamera.shake(1000);

        if (this.fadeCamera._fadeAlpha >= 1.0)
        {
            this.fadeCamera._fadeAlpha = 0.0;
            this.fadeCamera.fade(1000);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
