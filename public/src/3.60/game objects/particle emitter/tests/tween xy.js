class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        const particles = this.add.particles('crate');

        const emitter = particles.createEmitter({
            x: 100,
            y: 100,
            speedY: 120,
            lifespan: 2000,
            alpha: { start: 1, end: 0 }
        });

        this.tweens.add({
            targets: emitter,
            x: 700,
            duration: 1500,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1
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
