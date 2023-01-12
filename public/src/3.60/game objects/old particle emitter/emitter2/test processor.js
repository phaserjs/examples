class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/chunk.png');
    }

    create ()
    {
        const emitter = this.add.particles(0, 64, 'crate', {
            x: { min: 100, max: 700 },
            gravity: 20,
            lifespan: 3000,
            quantity: 8
        });

        const well = emitter.createGravityWell({
            x: 400,
            y: 300,
            power: 2,
            epsilon: 200,
            gravity: 100
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
