class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('star', 'assets/demoscene/star3.png');
        this.load.image('touhou', 'assets/pics/touhou1.png');
    }

    create ()
    {
        const emitter = this.add.particles(400, 200, 'star', {
            angle: { min: 240, max: 300 },
            speed: { min: 200, max: 300 },
            lifespan: 4000,
            gravityY: 180,
            quantity: 2,
            bounce: 0.4,
            bounds: new Phaser.Geom.Rectangle(-100, -200, 1000, 750)
        });

        emitter.particleBringToTop = false;

        const fx = emitter.postFX.addBokeh(0.5, 10, 0.2);

        // const fx = emitter.postFX.addBokeh(0.75, 1.5, 0.3);

        this.add.image(650, 600, 'touhou').setOrigin(0.5, 1);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000022',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
