class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('jellies', 'assets/atlas/jellies.png', 'assets/atlas/jellies.json');
    }

    create ()
    {
        this.emitter = this.add.particles(0, 0, 'jellies', {
            frame: [ 'WithShadow/Jelly5', 'WithShadow/Jelly2', 'WithShadow/Jelly4' ],
            scale: { start: 1, end: 0 },
            rotate: { start: 0, end: 360 },
            speed: { min: 200, max: 250 },
            lifespan: 2000,
            emitting: false
        });

        this.input.on('pointerdown', () =>
        {
            this.emitter.emitParticleAt(400, 300);
        });

        this.graphics = this.add.graphics();

        this.add.text(16, 16, 'Click to release a particle');
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0x00ff00);

        this.emitter.forEachAlive(particle => {

            this.graphics.strokeRectShape(particle.getBounds());

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
