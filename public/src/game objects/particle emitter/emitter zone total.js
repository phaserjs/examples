class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const shape1 = new Phaser.Geom.Circle(0, 0, 160);
        const shape2 = new Phaser.Geom.Ellipse(0, 0, 500, 150);
        const shape3 = new Phaser.Geom.Rectangle(-150, -150, 300, 300);
        const shape4 = new Phaser.Geom.Line(-150, -150, 150, 150);
        const shape5 = new Phaser.Geom.Triangle.BuildEquilateral(0, -140, 300);

        const emitter = this.add.particles(400, 300, 'flares', {
            frame: { frames: [ 'red', 'green', 'blue' ], cycle: true },
            blendMode: 'ADD',
            lifespan: 500,
            scale: { start: 0.5, end: 0.1 }
        });

        emitter.addEmitZone({ type: 'edge', source: shape1, quantity: 32, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape2, quantity: 32, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape3, quantity: 32, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape4, quantity: 32, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape5, quantity: 32, total: 64 });
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
