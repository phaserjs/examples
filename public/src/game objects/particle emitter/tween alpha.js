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

        const emitter = this.add.particles(400, 100, 'match3', {
            frame: 'Match3_Icon_25',
            speedX: { min: -300, max: 300 },
            speedY: { min: -300, max: 300 },
            lifespan: 2000,
            alpha: 1,
            scale: 0.5
        });

        this.tweens.add({
            targets: emitter,
            alpha: 0,
            y: 500,
            duration: 1500,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
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
