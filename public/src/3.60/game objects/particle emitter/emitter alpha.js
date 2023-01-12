class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/pics/checker.png');
        this.load.atlas('match3', 'assets/atlas/match3.png', 'assets/atlas/match3.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const emitter = this.add.particles(400, 300, 'match3', {
            frame: 'Match3_Icon_12',
            angle: { min: 240, max: 300 },
            speed: { min: 200, max: 300 },
            lifespan: 3000,
            scale: { start: 1, end: 0.25 },
            gravityY: 200
        });

        this.tweens.add({
            targets: emitter,
            alpha: 0,
            yoyo: true,
            repeat: -1,
            duration: 1000
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
