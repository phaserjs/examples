class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('blocks', 'assets/sprites/blocks.png', 'assets/sprites/blocks.json');
    }

    create ()
    {
        const emitter = this.add.particles(100, 300, 'blocks', {
            frame: 'redmonster',
            lifespan: 5000,
            angle: { min: -30, max: 30 },
            speed: 150,
            frequency: 200
        });

        const text = this.add.text(10, 10, 'Click to change. bringToTop: true');

        this.input.on('pointerdown', () => {

            if (emitter.particleBringToTop)
            {
                emitter.particleBringToTop = false;
            }
            else
            {
                emitter.particleBringToTop = true;
            }

            text.setText(`Click to change. bringToTop: ${emitter.particleBringToTop}`);

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
