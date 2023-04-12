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

        const emitter = this.add.particles(100, 300, 'match3', {
            frame: 'Match3_Icon_01',
            speedY: 200,
            lifespan: 2000,
            alpha: { start: 1, end: 0 },
            gravityX: 400,
            scale: 0.5
        });

        this.tweens.add({
            targets: emitter,
            speedY: -100,
            duration: 500,
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
