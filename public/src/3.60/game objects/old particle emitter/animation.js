class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
    }

    create ()
    {
        this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'prism', frames: this.anims.generateFrameNames('gems', { prefix: 'prism_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'ruby', frames: this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'square', frames: this.anims.generateFrameNames('gems', { prefix: 'square_', end: 14, zeroPad: 4 }), repeat: -1 });

        const particles = this.add.particles('gems');

        const emitter = particles.createEmitter({
            anim: { anims: [ 'prism', 'square' ], cycle: true },
            x: 64,
            y: { start: 500, end: 100, steps: 8 },
            lifespan: 4000,
            accelerationX: 200,
            frequency: 100
        });

        console.log(particles);
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
