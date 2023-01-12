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
            x: 600,
            y: 100,
            angle: { min: 140, max: 180 },
            speed: 400,
            gravityY: 200,
            lifespan: { min: 1000, max: 2000 },
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
