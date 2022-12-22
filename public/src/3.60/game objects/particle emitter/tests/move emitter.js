class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flare', 'assets/particles/white-flare.png');
        this.load.image('front', 'assets/pics/cardframe.png');
        this.load.image('card1', 'assets/pics/card1.png');
        this.load.image('card2', 'assets/pics/card2.png');
        this.load.image('card3', 'assets/pics/card3.png');
    }

    create ()
    {
        const card1 = this.add.image(225, 300, 'card1');
        this.add.image(225, 300, 'front');

        const card2 = this.add.image(575, 300, 'card2');
        this.add.image(575, 300, 'front');

        const rect1 = card1.getBounds();
        const rect2 = card1.getBounds();

        const particles = this.add.particles('flare');

        const emitter = particles.createEmitter({
            speed: 32,
            lifespan: 1500,
            quantity: 6,
            scale: { start: 0.4, end: 0 },
            emitZone: { type: 'edge', source: rect1, quantity: 48 }
        });

        // this.tweens.add({
        //     targets: emitter,
        //     x: 700,
        //     duration: 1500,
        //     ease: 'sine.inout',
        //     yoyo: true,
        //     repeat: -1
        // });
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
