class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.r = 0;
    }

    preload ()
    {
        this.load.image('apple', 'assets/sprites/apple.png');
        this.load.glsl('bundle', 'assets/shaders/bundle.glsl.js');
    }

    create ()
    {
        const texture = this.textures.addDynamicTexture('shaderTexture', 512, 512);

        this.apples = [];

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(25, 487);
            const y = Phaser.Math.Between(25, 487);

            this.apples.push({ x, y });
        }

        this.texture = texture;

        this.add.shader('Tunnel', 400, 300, 800, 600, [ 'shaderTexture' ]);
    }

    update ()
    {
        this.texture.fill(0x000066);

        this.apples.forEach(apple => {

            this.texture.stamp('apple', null, apple.x, apple.y, { rotation: this.r });

        });

        this.r += 0.1;
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
