class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush2.png');
    }

    create ()
    {
        const particles = this.add.particles('brush');

        const emitter = particles.createEmitter({
            x: 400,
            y: 100,
            speedX: 200,
            lifespan: 2000,
            alpha: 1
        });

        this.tweens.add({
            targets: emitter,
            alpha: 0,
            y: 500,
            speedX: -200,
            duration: 1500,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
        });

        console.log(emitter);
        window.emitter = emitter;
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
