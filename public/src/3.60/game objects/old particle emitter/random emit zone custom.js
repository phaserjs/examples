class Example extends Phaser.Scene
{
    circle = new Phaser.Geom.Circle(0, 0, 180);

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        const weightedCircle = {
            getRandomPoint: (vec) =>
            {
                const t = Phaser.Math.PI2 * Math.random();
                const r = Math.pow(Math.random(), -0.1);

                vec.x = this.circle.x + r * Math.cos(t) * this.circle.radius;
                vec.y = this.circle.y + r * Math.sin(t) * this.circle.radius;

                return vec;
            }
        };

        particles.createEmitter({
            frame: 'red',
            x: 400, y: 300,
            lifespan: 2000,
            quantity: 4,
            scale: 0.2,
            alpha: { start: 1, end: 0 },
            blendMode: 'ADD',
            emitZone: { type: 'random', source: weightedCircle }

            // Compare:
            // emitZone: { type: 'random', source: circle }
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
