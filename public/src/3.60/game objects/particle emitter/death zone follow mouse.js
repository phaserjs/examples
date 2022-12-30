class Example extends Phaser.Scene
{
    zone;
    graphics;

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const emitZone = new Phaser.Geom.Rectangle(0, 0, 800, 600);

        //  Any particles that enter this shape will be killed instantly
        this.deathZone = new Phaser.Geom.Circle(0, 0, 48);

        const particles = this.add.particles('flares');

        const emitter = particles.createEmitter({
            frame: [ 'red', 'green', 'blue' ],
            speed: { min: -20, max: 20 },
            lifespan: 10000,
            quantity: 2,
            scale: { min: 0.1, max: 0.4 },
            alpha: { start: 1, end: 0 },
            blendMode: 'ADD',
            emitZone: { source: emitZone },
            deathZone: { type: 'onEnter', source: this.deathZone }
        });

        const zone = emitter.deathZones[0].source;

        this.graphics = this.add.graphics();

        this.input.on('pointermove', pointer =>
        {
            zone.x = pointer.worldX;
            zone.y = pointer.worldY;
        });

        this.zone = zone;
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0x00ff00, 1);

        this.graphics.strokeCircleShape(this.zone);
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
