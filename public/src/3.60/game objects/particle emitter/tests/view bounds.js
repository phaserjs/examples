class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('bubbles', 'assets/particles/bubbles.png', 'assets/particles/bubbles.json');
    }

    create ()
    {
        this.particles = this.add.particles('bubbles');

        let f = 1;
        const frames = [ 'bluebubble', 'redbubble', 'greenbubble', 'silverbubble' ];

        this.createEmitter(-2400, -7400, frames[0]);
        // this.createEmitter(400, 400, frames[0]);

        for (let i = 0; i < 32; i++)
        {
            const x = Phaser.Math.Between(-4000, 4000);
            const y = Phaser.Math.Between(-4000, 4000);

            // this.createEmitter(x, y, frames[f]);

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
            acceleration: 0.02,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.graphics = this.add.graphics();

        this.add.text(10, 10, 'Cursors to move camera').setScrollFactor(0);
        this.info = this.add.text(10, 60, 'Emitters - visible: 1 off-screen: 8').setScrollFactor(0);

        window.party = this.particles;
    }

    createEmitter (x, y, frame)
    {
        const emitter = this.particles.createEmitter({
            x,
            y,
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
    }

    update (time, delta)
    {
        this.controls.update(delta);

        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff00);

        this.particles.emitters.each(emitter => {

            this.graphics.strokeRectShape(emitter.viewBounds);

        });
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

