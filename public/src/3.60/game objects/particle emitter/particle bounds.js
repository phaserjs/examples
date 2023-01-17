class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const rect = new Phaser.Geom.Rectangle(100, 100, 600, 400);

        this.add.particles(400, 250, 'flares', {
            frame: [ 'red', 'yellow', 'green' ],
            lifespan: 4000,
            speed: { min: 150, max: 250 },
            scale: { start: 0.4, end: 0 },
            gravityY: 150,
            bounce: 0.8,
            bounds: rect,
            blendMode: 'ADD'
        });

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0x00ff00);
        graphics.strokeRectShape(rect);
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
