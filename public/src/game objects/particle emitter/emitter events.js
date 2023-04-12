class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('flare', 'assets/particles/white-flare.png');
        this.load.image('fox', 'assets/pics/card3.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const card = this.add.image(400, 300, 'fox').setInteractive();

        const emitter = this.add.particles(0, 0, 'flare', {
            speed: 24,
            lifespan: 1500,
            quantity: 10,
            scale: { start: 0.4, end: 0 },
            emitting: false,
            emitZone: { type: 'edge', source: card.getBounds(), quantity: 42 },
            duration: 500
        });

        this.add.text(10, 10, 'Mouse over the card');

        const list = this.add.text(10, 60);

        card.on('pointerover', () => {

            list.text = '';

            emitter.start(2000);

        });

        emitter.on('start', () => {
            list.text = list.text.concat('START\n');
        });

        emitter.on('stop', () => {
            list.text = list.text.concat('STOP\n');
        });

        emitter.on('complete', () => {
            list.text = list.text.concat('COMPLETE\n');
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
