class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: { frames: [ 'red', 'blue', 'green', 'yellow' ], cycle: true },
            x: 64,
            y: { start: 500, end: 100, steps: 16 },
            lifespan: 4000,
            accelerationX: 200,
            scale: 0.4,
            frequency: 100
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
