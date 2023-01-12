class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        let k = 3;

        const rose = {
            getPoints: function (quantity, stepRate)
            {
                if (!stepRate)
                {
                    stepRate = Phaser.Math.PI2 / quantity;
                }

                const input = Phaser.Utils.Array.NumberArrayStep(0, Phaser.Math.PI2, stepRate);

                const output = new Array(input.length);

                for (let i = 0; i < input.length; i++)
                {
                    const angle = input[i];

                    output[i] = new Phaser.Math.Vector2().setToPolar(angle, 200 * Math.cos(k * angle));
                }

                return output;
            }
        };

        const emitter = particles.createEmitter({
            frame: { frames: [ 'green', 'blue' ], cycle: true },
            x: 400,
            y: 300,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD',
            emitZone: { type: 'edge', source: rose, quantity: 360 }
        });

        this.input.on('pointerup', () =>
        {
            k++;

            emitter.emitZone.updateSource();
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
