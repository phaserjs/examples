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
            frame: 'blue',
            x: 64,
            y: { min: 100, max: 500 },
            lifespan: 2000,
            speedX: { min: 200, max: 400 },
            scale: { start: 0.4, end: 0 },
            quantity: 4,
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
