class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('golem1', 'assets/tweens/golem1.png');
        this.load.image('golem2', 'assets/tweens/golem2.png');
        this.load.spritesheet('ice', 'assets/tweens/ice-48x48.png', { frameWidth: 48, frameHeight: 48 });
    }

    create ()
    {
        const golem = this.add.image(400, 300, 'golem1');

        this.tweens.add({
            targets: golem,
            texture: 'golem2',
            duration: 1000,
            repeat: -1
        });

        const particles = this.add.particles('ice');

        particles.createEmitter({
            frame: 0,
            x: 400,
            y: 360,
            lifespan: 2000,
            speed: { min: 400, max: 600 },
            angle: 330,
            gravityY: 300,
            scale: { start: 0.4, end: 0 },
            quantity: 2,
            blendMode: 'ADD'
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
