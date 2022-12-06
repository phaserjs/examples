class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        const well = particles.createGravityWell({
            x: 400,
            y: 300,
            power: 3,
            epsilon: 100,
            gravity: 100
        });

        const emitter = particles.createEmitter({
            frame: [ 'red', 'green' ],
            x: 600,
            y: 400,
            lifespan: 4000,
            speed: 200,
            scale: { start: 0.7, end: 0 },
            blendMode: 'ADD'
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
