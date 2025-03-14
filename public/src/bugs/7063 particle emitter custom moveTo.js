class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/skies/gradient26.png');
        this.load.image('ball', 'assets/demoscene/green_ball.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        let x = 400;
        let y = 570;

        this.input.on('pointermove', pointer => {
            x = pointer.worldX;
            y = pointer.worldY;
        });

        const balls = this.add.particles(0, 0, 'ball', {
            x: { min: 300, max: 500 },
            y: 0,
            advance: 2000,
            moveToX: {
                onEmit: () => {
                    return x;
                },
                onUpdate: () => {
                    return x;
                }
            },
            moveToY: {
                onEmit: () => {
                    return y;
                },
                onUpdate: () => {
                    return y;
                }
            },
            lifespan: 2000,
            sortProperty: 'lifeT',
            sortOrderAsc: true
        });
        // Workaround:
        // balls.moveTo = true;

        const text = this.add.text();

        this.events.on('update', () => {
            text.text = `moveTo: ${balls.moveToX}, ${balls.moveToY}`
        })
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);