class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('track', 'assets/particles/racetrack-bend.png');
        this.load.image('car', 'assets/sprites/car-red.png');
    }

    create ()
    {
        this.add.image(450, 300, 'track').setScale(0.8);

        this.add.particles(0, 0, 'car', {
            x: { start: 200, end: 850, ease: 'sine.in' },
            y: { start: 600, end: 100, ease: 'sine.out' },
            rotate: { start: 0, end: 90, ease: 'quad.in' },
            lifespan: 2200,
            frequency: 550
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0c5e03',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
