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

        const particles = this.add.particles('brush');

        this.emitter = particles.createEmitter({
            x: 400,
            y: 100,
            speedX: 200,
            lifespan: 2000,
            tint: this.hsv[0].color
        });

        this.tweens.add({
            targets: this.emitter,
            y: 500,
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

        this.emitter.tint = this.hsv[this.i].color;
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
