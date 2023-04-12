class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const shape1 = new Phaser.Geom.Circle(0, 0, 160);
        const shape2 = new Phaser.Geom.Ellipse(0, 0, 500, 150);
        const shape3 = new Phaser.Geom.Rectangle(-150, -150, 300, 300);
        const shape4 = new Phaser.Geom.Line(-150, -150, 150, 150);
        const shape5 = new Phaser.Geom.Triangle.BuildEquilateral(0, -140, 300);
        const shapes = [ shape1, shape2, shape3, shape4, shape5 ];

        let i = 0;

        const particles = this.add.particles('flares');

        const emitter = particles.createEmitter({
            frame: { frames: [ 'red', 'green', 'blue' ], cycle: true },
            x: 400,
            y: 300,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD',
            emitZone: { type: 'edge', source: shape1, quantity: 48, yoyo: false }
        });

        this.input.on('pointerdown', pointer =>
        {

            i++;

            if (i === shapes.length)
            {
                i = 0;
            }

            emitter.setEmitZone({ type: 'edge', source: shapes[i], quantity: 48, yoyo: false });

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
