class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate.png');
    }

    create ()
    {
        const particles = this.add.particles('crate');

        const emitter = particles.createEmitter();

        emitter.setPosition(400, 300);
        emitter.setSpeed(200);
        emitter.setLifespan(3000);
        emitter.setScale(0.5);

        /*
        var emitter = particles.createEmitter({
            x: 400, y: 300,
            lifespan: 3000,
            speed: 200,
            quantity: 1,
            scale: 0.5
        });

        //  Overrides the 0.5 scale set in the config object above
        emitter.setScale(2);
        */
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
