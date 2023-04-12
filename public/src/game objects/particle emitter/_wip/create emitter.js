class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('spark', 'assets/particles/blue.png');
    }

    create ()
    {
        //  First create a particle manager
        //  A single manager can be responsible for multiple emitters
        //  The manager also controls which particle texture is used by _all_ emitter
        const particles = this.add.particles('spark');

        const emitter = particles.createEmitter();

        emitter.setPosition(400, 300);
        emitter.setSpeed(200);
        emitter.setBlendMode(Phaser.BlendModes.ADD);
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
