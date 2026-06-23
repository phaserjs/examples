class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bubble', 'assets/particles/bubble256.png');
    }

    create ()
    {
        const emitter1 = this.add.particles(200, 800, 'bubble', {
            angle: { min: 260, max: 280 },
            speed: { min: 40, max: 80 },
            lifespan: 40000,
            frequency: 1000,
            advance: 40000
        });

        const emitter2 = this.add.particles(600, -200, 'bubble', {
            angle: { min: 80, max: 100 },
            speed: { min: 40, max: 80 },
            lifespan: 40000,
            frequency: 1000,
            advance: 40000
        });

        const customContext = this.add.customcontext(0, 0, emitter2, (drawingContext) => {
            drawingContext.setAlphaStrategy('dither');
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
