class Example extends Phaser.Scene
{
    block;

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const source = {
            contains: (x, y) => this.block.body.hitTest(x, y)
        };

        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: [ 'red', 'green', 'blue' ],
            x: 400,
            y: 100,
            speed: 300,
            gravityY: 400,
            lifespan: 4000,
            scale: 0.4,
            blendMode: 'ADD',
            deathZone: { type: 'onEnter', source: source }
        });

        this.block = this.physics.add.image(400, 100, 'block');

        this.block.setGravity(0, 200);
        this.block.setVelocity(100, 200);
        this.block.setBounce(1, 1);
        this.block.setCollideWorldBounds(true);

    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    physics: { default: 'arcade' },
    scene: Example
};

const game = new Phaser.Game(config);
