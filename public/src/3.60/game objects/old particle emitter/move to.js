class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        const rect = new Phaser.Geom.Rectangle(0, 0, 1600, 100);

        const emitter = particles.createEmitter({
            frame: { frames: [ 'red', 'green', 'blue' ], cycle: true, quantity: 2 },
            x: -400,
            y: -100,
            moveToX: 400,
            moveToY: 600,
            lifespan: 1000,
            scale: 0.5,
            quantity: 4,
            _frequency: 20,
            blendMode: 'ADD',
            emitZone: { source: rect }
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
