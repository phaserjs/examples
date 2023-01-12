class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('bubbles', 'assets/particles/bubbles.png', 'assets/particles/bubbles.json');
    }

    create ()
    {
        this.emitter = this.add.particles(400, 400, 'bubbles', {
            frame: [ 'bluebubble', 'redbubble', 'greenbubble', 'silverbubble' ],
            scale: { min: 0.1, max: 0.5 },
            speed: { min: 20, max: 40 },
            alpha: { start: 1, end: 0 },
            lifespan: 2000,
            frequency: 50,
            gravityY: -90,
            particleBringToTop: false
        });

        this.g = this.add.graphics();

        this.bounds = this.emitter.getBounds(10, 6000);
    }

    update ()
    {
        this.g.clear();
        this.g.lineStyle(1, 0x00ff00);

        //  The current emitter bounds
        const vb = this.emitter.getBounds();

        this.g.strokeRectShape(vb);

        if (Phaser.Geom.Rectangle.ContainsRect(this.bounds, vb))
        {
            this.g.lineStyle(1, 0xffff00);
        }
        else
        {
            this.g.lineStyle(1, 0xff0000);
        }

        //  The pre-calculated emitter bounds
        this.g.strokeRectShape(this.bounds);
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
