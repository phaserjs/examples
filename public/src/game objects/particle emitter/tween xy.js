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

        const emitter = this.add.particles(100, 200, 'match3', {
            frame: 'Match3_Icon_30',
            speed: 120,
            lifespan: 2000,
            scale: 0.3,
            alpha: { start: 1, end: 0 }
        });

        this.tweens.add({
            targets: emitter,
            x: 700,
            duration: 2500,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: emitter,
            y: 400,
            duration: 1000,
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
