class Example extends Phaser.Scene
{
    particles;
    rt;

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        this.particles = this.add.particles(400, 300, 'flares', {
            frame: 'blue',
            x: 400,
            y: 300,
            lifespan: 2000,
            speed: { min: 400, max: 600 },
            angle: 0,
            gravityY: 300,
            scale: { start: 0.4, end: 0 },
            quantity: 2,
            blendMode: 'ADD'
        });

        this.particles.setVisible(false);

        this.rt = this.add.renderTexture(400, 300, 800, 600);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.draw(this.particles, 0, 0);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
