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
            x: 400,
            y: 200,
            speed: 100,
            lifespan: 3000,
            gravityY: 200
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
