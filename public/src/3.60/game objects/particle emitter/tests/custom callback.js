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
            x: (particle, key, t, value) => {
                return pointerX;
            },
            y: (particle, key, t, value) => {
                return pointerY;
            },
            speed: 200,
            lifespan: 2000,
            gravityY: 200
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
