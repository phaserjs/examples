class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.spritesheet('coin', 'assets/sprites/coin.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const particles = this.add.particles('coin');

        const emitter = particles.createEmitter({
            x: { start: 400, end: 0, ease: 'sine.in' },
            y: { start: 300, end: 32 },
            lifespan: 1000,
            frequency: 150,
            // on: false,
            stopAfter: 6
        });

        this.input.on('pointerdown', () => {

            emitter.start();

        });
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
