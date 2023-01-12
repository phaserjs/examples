class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        const circle = new Phaser.Geom.Circle(400, 300, 530);

        const emitter = particles.createEmitter({
            frame: { frames: [ 'red', 'green', 'blue' ], cycle: true, quantity: 32 * 4 },
            x: 0,
            y: 0,
            moveToX: 400,
            moveToY: 300,
            lifespan: 1000,
            quantity: 4,
            scale: { start: 0.8, end: 0.2 },
            delay: 1000,
            blendMode: 'ADD',
            emitZone: { source: circle, type: 'edge', quantity: 32 }
        });

        console.log(emitter);
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
