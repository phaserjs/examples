class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bubble', 'assets/particles/red.png');
    }

    create ()
    {
        const particles = this.add.particles('bubble');

        //  interpolation types:

        //  linear
        //  bezier
        //  catmull

        const emitter = particles.createEmitter({
            x: { values: [ 50, 500, 200, 800 ], interpolation: 'catmull' },
            y: 100,
            lifespan: 2500,
            gravityY: 120,
            speed: 16,
            scale: 0.65
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
