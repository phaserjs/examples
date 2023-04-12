class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('apple', 'assets/sprites/apple.png');
        this.load.glsl('bundle', 'assets/shaders/bundle.glsl.js');
    }

    create ()
    {
        const texture = this.textures.addDynamicTexture('shaderTexture', 512, 512);

        texture.fill(0x000066);

        for (let i = 0; i < 64; i++)
        {
            texture.stamp('apple', null, Phaser.Math.Between(25, 487), Phaser.Math.Between(25, 487));
        }

        this.add.shader('Tunnel', 400, 300, 800, 600, [ 'shaderTexture' ]);
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
