class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        //  Create an emitter by passing in a config object directly to the Particle Manager

        const emitter = particles.createEmitter({
            frame: [ 'red', 'blue', 'green', 'yellow' ],
            x: 400,
            y: 300,
            speed: 200,
            lifespan: 3000,
            blendMode: 'ADD'
        });

        //  You can also call 'fromJSON' with the same config object:

        /*
        var emitter = particles.createEmitter();

        emitter.fromJSON({
            frame: [ 'red', 'blue', 'green', 'yellow' ],
            x: 400,
            y: 300,
            speed: 200,
            lifespan: 3000,
            blendMode: 'ADD'
        });
        */

        //  Both the above are the same as doing the following:
        //  (except using a config object is faster and more efficient)

        /*
        var emitter = particles.createEmitter();

        emitter.setFrame([ 'red', 'blue', 'green', 'yellow' ]);
        emitter.setPosition(400, 300);
        emitter.setSpeed(200);
        emitter.setLifespan(3000);
        emitter.setBlendMode('ADD');
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
