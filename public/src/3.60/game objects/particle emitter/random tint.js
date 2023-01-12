class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush2.png');
    }

    create ()
    {
        const hsv = Phaser.Display.Color.HSVColorWheel();

        const tint = hsv.map(entry => entry.color);

        const particles = this.add.particles('brush');

        const emitter = particles.createEmitter({
            x: 400,
            y: 100,
            speedX: 200,
            lifespan: 2000,
            tint
        });

        this.tweens.add({
            targets: emitter,
            y: 500,
            speedX: -200,
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
