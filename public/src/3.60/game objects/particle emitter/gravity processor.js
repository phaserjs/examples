class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('spark', 'assets/particles/elec3.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const emitter = this.add.particles(0, 0, 'spark', {
            scale: 0.5,
            lifespan: 10000,
            gravityY: -50,
            frequency: 20,
            maxVelocityX: 200,
            maxVelocityY: 200,
            blendMode: 'ADD'
        });

        const shape1 = new Phaser.Geom.Rectangle(0, 600, 800, 128);

        emitter.addEmitZone({ type: 'random', source: shape1 });

        emitter.createGravityWell({
            x: 400,
            y: 150,
            power: 4.2,
            epsilon: 250,
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
