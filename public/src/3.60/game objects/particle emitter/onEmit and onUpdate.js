class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        const particles = this.add.particles('crate');

        let pointerX = 400;
        let pointerY = 300;

        this.input.on('pointerdown', pointer => {
            pointerX = pointer.worldX;
            pointerY = pointer.worldY;
        });

        const emitter = particles.createEmitter({
            x: {
                onEmit: (particle, key, t, value) => {
                    return pointerX;
                },
                onUpdate: (particle, key, t, value) => {
                    return value;
                }
            },
            y: {
                onEmit: (particle, key, t, value) => {
                    return pointerY;
                },
                onUpdate: (particle, key, t, value) => {
                    //  add to the y value based on particles remaining life
                    //  this creates the effect of gravity, without using gravity
                    return value + (t * 10);
                }
            },
            // quantity: 1,
            speed: 200,
            lifespan: 2000
        });

        console.log(emitter.ops);
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
