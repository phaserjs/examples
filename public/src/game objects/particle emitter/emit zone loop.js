class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        let loops = 0;

        const text = this.add.text(400, 300, '0', { font: '64px Courier', fill: '#fff' }).setOrigin(0.5);

        const emitter = this.add.particles(400, 300, 'flares', {
            frame: 'red',
            blendMode: 'ADD',
            lifespan: 1000,
            frequency: 16,
            scale: { start: 0.8, end: 0.1 },
            stopAfter: 32
        });

        emitter.on('complete', () => {

            loops++;

            text.setText(loops);

            emitter.start();

        });

        emitter.addEmitZone({
            type: 'edge',
            source: new Phaser.Geom.Circle(0, 0, 160),
            quantity: 32
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
