class Boot extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'boot' });
    }

    preload ()
    {
        this.load.image('sky', 'assets/skies/space2.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create ()
    {
        this.scene.start('outerSpace');
    }
}

class OuterSpace extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'outerSpace',
            physics: {
                arcade: {
                    gravity: { y: 200 }
                }
            }
        });
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo')
            .setVelocity(100, 200)
            .setBounce(1, 1)
            .setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}

const gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Boot, OuterSpace ]
};

const game = new Phaser.Game(gameConfig);
