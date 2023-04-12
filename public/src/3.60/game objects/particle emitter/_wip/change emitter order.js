class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('veg', 'assets/sprites/fruitnveg64wh37.png', { frameWidth: 64, frameHeight: 64 });
    }

    create ()
    {
        const particles = this.add.particles('veg');

        //  The emitters created first are placed at the bottom of the display list, just like sprites and other game objects

        const cherries = particles.createEmitter({
            frame: 0,
            x: 400,
            y: 300,
            speed: 100,
            frequency: 150,
            lifespan: 2000
        });

        const orange = particles.createEmitter({
            frame: 1,
            x: 400,
            y: 300,
            speed: 100,
            frequency: 150,
            lifespan: 2000
        });

        const turnip = particles.createEmitter({
            frame: 2,
            x: 400,
            y: 300,
            speed: 100,
            frequency: 150,
            lifespan: 2000
        });

        this.input.once('pointerdown', pointer =>
        {

            //  Move the cherries to the top of the display list
            particles.emitters.bringToTop(cherries);

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
