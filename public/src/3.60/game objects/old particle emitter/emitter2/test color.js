class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const hsv = Phaser.Display.Color.HSVColorWheel();

        const color = hsv.map(entry => entry.color);

        const emitter = this.add.particles(100, 300, 'flares',
        {
            frame: 'white',
            color,
            lifespan: 4000,
            angle: { min: -20, max: 20 },
            speed: 200,
            frequency: 150,
            quantity: 2,
            blendMode: 'ADD'
        });

        window.emma = emitter;
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
