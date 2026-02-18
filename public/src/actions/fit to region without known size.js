class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        this.createFlameRegion(200, 200, 100, 100);
        this.createFlameRegion(500, 150, 75, 75);
        this.createFlameRegion(600, 300, 50, 50);
        this.createFlameRegion(350, 450, 150, 150);
    }

    createFlameRegion (x, y, width, height)
    {
        const flame = this.add.particles(150, 550, 'flares',
        {
            frame: 'white',
            color: [ 0xfacc22, 0xf89800, 0xf83600, 0x9f0404 ],
            colorEase: 'quad.out',
            lifespan: 2400,
            angle: { min: -100, max: -80 },
            scale: { start: 0.70, end: 0, ease: 'sine.out' },
            speed: 100,
            advance: 2000,
            blendMode: 'ADD'
        });

        const region = { x, y, width, height };

        // Set the dimensions of the target manually, because ParticleEmitter doesn't have size.
        Phaser.Actions.FitToRegion(flame, -1, region, { width: 64, height: 64 });
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
