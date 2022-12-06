class Example extends Phaser.Scene
{
    rose = {
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
                output[i] = new Phaser.Math.Vector2().setToPolar(angle, 200 * Math.cos(this.k * angle));
            }

            return output;
        }
    };

    k = 3;

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const particles = this.add.particles('flares');

        const emitter = particles.createEmitter({
            frame: { frames: [ 'green', 'blue' ], cycle: true },
            x: 400,
            y: 300,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD',
            emitZone: { type: 'edge', source: this.rose, quantity: 360 }
        });

        this.input.on('pointerup', () =>
        {
            this.k++;
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
