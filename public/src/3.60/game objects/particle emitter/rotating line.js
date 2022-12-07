class Example extends Phaser.Scene
{
    line;

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        this.line = new Phaser.Geom.Line(-200, -200, 200, 200);

        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: [ 'red', 'green', 'yellow', 'blue' ],
            x: 400, y: 300,
            scale: { start: 0.2, end: 0 },
            alpha: { start: 1, end: 0, ease: 'Quartic.easeOut' },
            speed: { min: -20, max: 20 },
            quantity: 32,
            emitZone: { source: this.line },
            blendMode: 'SCREEN'
        });
    }

    update ()
    {
        Phaser.Geom.Line.Rotate(this.line, 0.03);
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
