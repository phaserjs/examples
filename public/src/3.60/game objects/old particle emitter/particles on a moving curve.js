class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('dragcircle', 'assets/sprites/dragcircle.png', { frameWidth: 16 });
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const graphics = this.add.graphics();

        const particles = this.add.particles('flares');

        const path = { t: 0, vec: new Phaser.Math.Vector2() };

        const curve = new Phaser.Curves.Spline([
            20, 550,
            260, 450,
            300, 250,
            550, 145,
            745, 256
        ]);

        const emitter = particles.createEmitter({
            frame: 'blue',
            quantity: 48,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD',
            emitZone: { type: 'edge', source: curve, quantity: 48 }
        });

        //  Create drag-handles for each point

        for (let i = 0; i < curve.points.length; i++)
        {
            const point = curve.points[i];

            const handle = this.add.image(point.x, point.y, 'dragcircle', 0)
                .setInteractive()
                .setDataEnabled();

            handle.data.set('vector', point);

            this.input.setDraggable(handle);
        }

        this.input.on('dragstart', (pointer, gameObject) =>
        {

            gameObject.setFrame(1);

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

            gameObject.data.get('vector').set(dragX, dragY);

            emitter.emitZone.updateSource();

        });

        this.input.on('dragend', (pointer, gameObject) =>
        {

            gameObject.setFrame(0);

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
