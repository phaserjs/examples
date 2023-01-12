class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/ui/undersea-bg.png');
        this.load.spritesheet('fish', 'assets/sprites/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
    }

    create ()
    {
        // this.add.image(400, 300, 'bg');

        const particles = this.add.particles('fish');

        /*
        var emitter = particles.createEmitter({
            frame: 0,
            x: { start: 100, end: 400, randomStart: true },
            y: 300,
            gravityY: [ 10, 20, 30, 40, 50 ],
            active: false
        });
    */

        const emitter = particles.createEmitter({
            frame: [ 0, 1, 2 ],
            x: 300,
            y: 400,
            lifespan: 2000,
            scale: { start: 4, end: 1, random: true },
            alpha: { start: 1, end: 0 },
            particleAngle: { start: 0, end: 360 },
            active: true
        });


        /*
        var emitter = particles.createEmitter({
            frame: 0,
            x: 0,
            y: { start: 100, end: 500, steps: 10 },
            lifespan: 2000,
            speedX: 200
        });

        var emitter2 = particles.createEmitter({
            frame: 1,
            x: 300,
            y: { start: 100, end: 500, steps: 10 },
            lifespan: 2000,
            speedX: 200
        });
    */

        /*
        var emitter = particles.createEmitter({
            frame: 0,
            radial: false,
            x: 200,
            y: 200,
            lifespan: 1000,
            speedY: 200
        });
    */
        console.log(emitter);

        this.input.once('pointerdown', event =>
        {

            emitter.setPosition(400, 200);

        });
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
