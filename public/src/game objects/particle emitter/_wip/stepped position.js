class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/ui/undersea-bg.png');
        this.load.spritesheet('fish', 'assets/sprites/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const particles = this.add.particles('fish');

        particles.createEmitter({
            frame: { frames: [ 0, 1, 2 ], cycle: true },
            x: -70,
            y: { start: 100, end: 500, steps: 8 },
            lifespan: 5000,
            speedX: 200,
            frequency: 500
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
