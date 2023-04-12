class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/tweens/sky.png');
        this.load.atlas('match3', 'assets/atlas/match3.png', 'assets/atlas/match3.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const emitter = this.add.particles(0, 0, 'match3', {
            frame: 'Match3_Icon_28',
            x: { start: 700, end: -64, ease: 'sine.in' },
            y: { start: 600, end: -64 },
            lifespan: 1500,
            frequency: 150,
            emitting: false,
            stopAfter: 6, //  This emitter will release 6 particles and then stop
            scale: 0.5
        });

        this.add.text(400, 32, 'Click to release 6 particles', { font: '22px Arial', fill: '#ffffff' }).setOrigin(0.5);

        this.input.on('pointerdown', () => {

            emitter.start();

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
