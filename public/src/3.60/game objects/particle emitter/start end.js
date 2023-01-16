class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        this.add.particles(0, 0, 'crate', {
            scale: { start: 1, end: 0 },
            x: { min: 100, max: 700 },
            y: { start: 100, end: 500, ease: 'bounce.out' },
            lifespan: 2000
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
