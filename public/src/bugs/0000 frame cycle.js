class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('match3', 'assets/atlas/match3.png', 'assets/atlas/match3.json');
    }

    create ()
    {
        const emitter = this.add.particles(400, 300, 'match3', {
            frame: { frames: [ 'Match3_Icon_12', 'Match3_Icon_11' ], cycle: true },
            angle: { min: 240, max: 300 },
            speed: { min: 200, max: 300 },
            lifespan: 3000,
            scale: { start: 0.2, end: 0.05 },
            gravityY: 200,
            frequency: 1000
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
