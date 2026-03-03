class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('piggy', 'assets/pics/pigchampagne.png');
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        const piggy = this.add.image(400, 300, 'piggy');

        const textureA = this.textures.get('piggy');
        const textureB = this.textures.get('atari');

        this.input.on('pointerdown', () => {

            textureA.setSource(textureB.source);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
