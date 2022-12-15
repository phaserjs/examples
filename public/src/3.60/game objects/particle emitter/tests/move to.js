class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        const particles = this.add.particles('crate');

        const emitter = particles.createEmitter({
            x: { min: 100, max: 700 },
            y: 64,
            moveToX: 400,
            moveToY: 570,
            lifespan: 3000
        });

        console.log(emitter);
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
