class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        //  Any particles that enter this shape will be killed instantly
        const rect = new Phaser.Geom.Rectangle(200, 350, 400, 200);

        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: [ 'red', 'green', 'blue' ],
            x: 400,
            y: 100,
            speed: 300,
            gravityY: 400,
            lifespan: 4000,
            scale: 0.4,
            blendMode: 'ADD',
            deathZone: { type: 'onEnter', source: rect }
        });

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0x00ff00, 1);

        graphics.strokeRectShape(rect);

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
