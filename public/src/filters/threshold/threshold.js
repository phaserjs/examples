class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('smoke', 'assets/particles/smoke0.png');
    }

    create ()
    {
        // Add a smoke emitter.
        const emitter = this.add.particles(640, 360, 'smoke', {
            alpha: { start: 1, end: 0 },
            speed: { min: 100, max: 200 },
            lifespan: 3000,
            quantity: 1
        });

        // Add a threshold filter to the emitter.
        emitter.enableFilters().focusFiltersOverride(640, 360, 1280, 720);
        emitter.filters.internal.addThreshold(0.5);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
