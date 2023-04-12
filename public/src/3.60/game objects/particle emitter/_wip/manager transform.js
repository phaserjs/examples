class Example extends Phaser.Scene
{
    particles;

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        // this.cameras.main.setAlpha(0.4);

        this.particles = this.add.particles('flares');

        this.particles.createEmitter({
            frame: 'blue',
            x: -100,
            y: 0,
            lifespan: 2000,
            speed: { min: 400, max: 600 },
            angle: 330,
            gravityY: 300,
            scale: { start: 0.4, end: 0 },
            quantity: 2,
            blendMode: 'ADD'
        });

        this.particles.createEmitter({
            frame: 'red',
            x: 100,
            y: 0,
            lifespan: 2000,
            speed: { min: 400, max: 600 },
            angle: 330,
            gravityY: 300,
            scale: { start: 0.4, end: 0 },
            quantity: 2,
            blendMode: 'ADD'
        });

        this.particles.setPosition(400, 300);
    }

    update ()
    {
        this.particles.rotation -= 0.01;
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
