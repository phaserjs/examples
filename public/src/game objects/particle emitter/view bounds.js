class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('bubbles', 'assets/particles/bubbles.png', 'assets/particles/bubbles.json');
    }

    create ()
    {
        this.emitters = [];

        this.graphics = this.add.graphics();

        //  Our camera just for the help text
        const textCam = this.cameras.add(0, 0, 800, 600);

        let f = 1;
        const frames = [ 'bluebubble', 'redbubble', 'greenbubble', 'silverbubble' ];

        const emitter = this.createEmitter(400, 300, frames[0]);

        this.emitters.push(emitter);

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(-1900, 1900);
            const y = Phaser.Math.Between(-1900, 1900);

            const emitter = this.createEmitter(x, y, frames[f]);

            this.emitters.push(emitter);

            f++;

            if (f === frames.length)
            {
                f = 0;
            }
        }

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.02,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        const help = this.add.text(10, 10, 'Cursors to move camera. Q and E to zoom.').setScrollFactor(0);

        this.info = this.add.text(10, 40, '').setScrollFactor(0);

        this.cameras.main.ignore([ help, this.info ]);

        textCam.ignore([ this.graphics, ...this.emitters ]);
    }

    createEmitter (x, y, frame)
    {
        const emitter = this.add.particles(x, y, 'bubbles', {
            frame,
            scale: { min: 0.1, max: 0.5 },
            speed: { min: 20, max: 40 },
            alpha: { start: 1, end: 0 },
            lifespan: 2000,
            frequency: 50,
            gravityY: -90,
            particleBringToTop: false
        });

        emitter.viewBounds = emitter.getBounds(10, 6000);

        return emitter;
    }

    update (time, delta)
    {
        this.controls.update(delta);

        this.graphics.clear();
        this.graphics.fillStyle(0x2d2d6d);
        this.graphics.fillRect(-2000, -2000, 4000, 4000);

        this.graphics.lineStyle(1, 0x00ff00);

        var visible = 0;
        var offscreen = 0;
        var cam = this.cameras.main;
        var camBounds = cam.worldView;

        this.emitters.forEach(emitter => {

            this.graphics.strokeRectShape(emitter.viewBounds);

            if (Phaser.Geom.Intersects.RectangleToRectangle(emitter.viewBounds, camBounds))
            {
                visible++;
            }
            else
            {
                offscreen++;
            }

        });

        this.info.setText([
            `Particle Emitters: Rendering: ${visible} - Culled: ${offscreen}`,
            '',
            `Camera x: ${cam.scrollX} y: ${cam.scrollY}`
        ]);
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

