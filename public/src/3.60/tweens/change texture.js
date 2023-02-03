class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/sky1.png');
        this.load.image('golem1', 'assets/tweens/golem1.png');
        this.load.image('golem2', 'assets/tweens/golem2.png');
        this.load.spritesheet('ice', 'assets/tweens/ice-48x48.png', { frameWidth: 48, frameHeight: 48 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const golem = this.add.image(400, 300, 'golem1');

        //  This is just a particle emitter for our effect
        const particles = this.add.particles(400, 230, 'ice', {
            lifespan: 2000,
            speed: 360,
            angle: { start: 40, end: 150, steps: 8 },
            quantity: 0
        });

        //  Here we'll change the texture from 'golem1' to 'golem2' after 1000 ms.
        //  Because we set it to repeat -1 it will then set it back to golem1
        //  again after a second, then repeat. We also set the particles to explode
        //  during the onRepeat callback.
        this.tweens.add({
            targets: golem,
            texture: 'golem2',
            duration: 1000,
            repeat: -1,
            onRepeat: () => {
                particles.explode(8);
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
