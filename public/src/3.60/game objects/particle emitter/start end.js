class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/tweens/sky.png');
        this.load.atlas('match3', 'assets/atlas/match3.png', 'assets/atlas/match3.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.particles(0, 0, 'match3', {
            frame: 'Match3_Icon_04',
            scale: { start: 0.3, end: 0 },
            x: { min: 100, max: 700 },
            y: { start: 100, end: 500, ease: 'bounce.out' },
            lifespan: 2000
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
