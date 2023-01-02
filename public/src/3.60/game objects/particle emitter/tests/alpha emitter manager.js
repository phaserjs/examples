class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/pics/checker.png');
        this.load.atlas('match3', 'assets/atlas/match3.png', 'assets/atlas/match3.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const particles = this.add.particles('match3');

        particles.createEmitter({
            frame: 'Match3_Icon_12',
            angle: { min: 240, max: 300 },
            speed: { min: 200, max: 300 },
            quantity: 6,
            lifespan: 2000,
            scale: { start: 1, end: 0.25 },
            on: false
        });

        particles.createEmitter({
            frame: 'Match3_Icon_06',
            angle: { start: 0, end: 360, steps: 32 },
            lifespan: 1500,
            speed: 400,
            quantity: 32,
            scale: { start: 0.5, end: 0 },
            on: false
        });

        particles.createEmitter({
            frame: 'Match3_Icon_17',
            angle: { min: 240, max: 300 },
            speed: { min: 400, max: 600 },
            quantity: { min: 4, max: 10, int: true },
            lifespan: 4000,
            scale: 0.4,
            rotate: { start: 0, end: 360, ease: 'Back.easeOut' },
            gravityY: 600,
            on: false
        });

        this.input.on('pointerdown', pointer =>
        {
            particles.emitParticleAt(pointer.x, pointer.y);
        });

        this.tweens.add({
            targets: particles,
            alpha: 0,
            yoyo: true,
            repeat: -1,
            duration: 500
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
