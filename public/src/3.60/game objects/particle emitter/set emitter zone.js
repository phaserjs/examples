class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('flare', 'assets/particles/white-flare.png');
        this.load.image('slug', 'assets/pics/card1.png');
        this.load.image('fox', 'assets/pics/card3.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const card1 = this.add.image(225, 300, 'slug').setInteractive();
        const card2 = this.add.image(575, 300, 'fox').setInteractive();

        const emitZone1 = { type: 'edge', source: card1.getBounds(), quantity: 42 };
        const emitZone2 = { type: 'edge', source: card2.getBounds(), quantity: 42 };

        const emitter = this.add.particles(0, 0, 'flare', {
            speed: 24,
            lifespan: 1500,
            quantity: 5,
            scale: { start: 0.4, end: 0 },
            advance: 2000,
            emitZone: [ emitZone1, emitZone2 ]
        });

        card1.on('pointerover', () => {

            emitter.setEmitZone(0);
            emitter.fastForward(2000);

        });

        card2.on('pointerover', () => {

            emitter.setEmitZone(1);
            emitter.fastForward(2000);

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
