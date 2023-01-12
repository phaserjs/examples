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

        const emitZone1 = { type: 'edge', source: card.getBounds(), quantity: 42 };

        const emitter = this.add.particles(0, 0, 'flare', {
            speed: 24,
            lifespan: 1500,
            quantity: 10,
            scale: { start: 0.4, end: 0 },
            emitZone: emitZone1,
            duration: 500,
            emitting: false
        });

        card.on('pointerover', () => {

            emitter.start(2000);

        });

        this.add.text(10, 10, 'Mouse over the card');
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
