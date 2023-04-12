class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/tweens/sky.png');
        this.load.atlas('match3', 'assets/atlas/match3.png', 'assets/atlas/match3.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const emitter = this.add.particles(0, 0, 'match3', {
            frame: [ 'Match3_Icon_30', 'Match3_Icon_29' ],
            lifespan: 4000,
            speed: { min: 200, max: 350 },
            scale: { start: 0.4, end: 0 },
            rotate: { start: 0, end: 360 },
            gravityY: 200,
            emitting: false
        });

        this.input.on('pointerdown', pointer => {

            emitter.emitParticleAt(pointer.worldX, pointer.worldY, 4);

        });

        this.add.text(10, 10, 'Click to emit particles at pointer');
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
