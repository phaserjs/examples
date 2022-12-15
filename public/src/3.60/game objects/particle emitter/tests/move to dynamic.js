class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        const particles = this.add.particles('crate');

        let x = 400;
        let y = 570;

        this.input.on('pointermove', pointer => {
            x = pointer.worldX;
            y = pointer.worldY;
        });

        const emitter = particles.createEmitter({
            x: { min: 100, max: 700 },
            y: 64,
            moveToX: {
                onEmit: () => {
                    return x;
                },
                onUpdate: () => {
                    return x;
                }
            },
            moveToY: {
                onEmit: () => {
                    return y;
                },
                onUpdate: () => {
                    return y;
                }
            },
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
