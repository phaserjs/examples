class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/sprites/brush1.png');
    }

    create ()
    {
        const hsv = Phaser.Display.Color.HSVColorWheel();

        const tint = hsv.map(entry => entry.color);

        const emitter = this.add.particles(400, 100, 'brush', {
            speedX: 200,
            lifespan: 2000,
            tint
        });

        this.tweens.add({
            targets: emitter,
            particleY: 400,
            speedX: -200,
            duration: 1500,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1
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
