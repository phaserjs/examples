class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        //  Any particles that leave this shape will be killed instantly
        const circle = new Phaser.Geom.Circle(400, 300, 200);

        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: [ 'red', 'green', 'blue' ],
            x: 400,
            y: 300,
            speed: 300,
            lifespan: 4000,
            scale: 0.4,
            blendMode: 'ADD',
            deathZone: { type: 'onLeave', source: circle }
        });

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0x00ff00, 1);

        graphics.strokeCircleShape(circle);
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
