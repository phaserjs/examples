class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('spark', 'assets/particles/blue.png');
    }

    create ()
    {
        const particles = this.add.particles('spark');

        const emitter = particles.createEmitter({
            x: 400,
            y: 300,
            angle: { min: 180, max: 360 },
            speed: 400,
            gravityY: 350,
            lifespan: 4000,
            quantity: 6,
            scale: { start: 0.1, end: 1 },
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
