class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush2.png');
    }

    create ()
    {
        this.hsv = Phaser.Display.Color.HSVColorWheel();
        this.i = 0;

        this.emitter = this.add.particles(400, 100, 'brush', {
            speedX: 200,
            lifespan: 2000,
            tint: this.hsv[0].color,
        });

        this.tweens.add({
            targets: this.emitter,
            particleY: 400,
            speedX: -200,
            duration: 1500,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.i++;

        if (this.i === 360)
        {
            this.i = 0;
        }

        this.emitter.particleTint = this.hsv[this.i].color;
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
