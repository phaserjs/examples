class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('apple', 'assets/sprites/apple.png');
        this.load.glsl('tunnel', 'assets/shaders/tunnel.frag');
    }

    create ()
    {
        const texture = this.textures.addDynamicTexture('shaderTexture', 512, 512);

        texture.fill(0x000066);

        for (let i = 0; i < 64; i++)
        {
            texture.stamp('apple', null, Phaser.Math.Between(25, 487), Phaser.Math.Between(25, 487));
        }
        texture.render();

        this.add.shader({
            name: 'Tunnel',
            fragmentKey: 'tunnel',
            initialUniforms: {
                resolution: [ 800, 600 ],
                iChannel0: 0,
                alpha: 1,
                origin: 2
            },
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            }
        }, 400, 300, 800, 600, [ 'shaderTexture' ]);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
