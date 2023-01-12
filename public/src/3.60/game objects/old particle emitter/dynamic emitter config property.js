class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('arrow', 'assets/sprites/arrow.png');
    }

    create ()
    {
        const particles = this.add.particles('arrow');

        let customAngle = 0;

        this.input.on('pointerup', () =>
        {

            customAngle += 90;

        });

        const emitter = particles.createEmitter({
            x: 400,
            y: 300,
            speed: 180,
            lifespan: 3000,
            rotate: { onEmit: function () { return customAngle; } }
        });

        const text = this.add.text(10, 10, 'Click to change particle angle', { font: '16px Courier', fill: '#ffffff' });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
