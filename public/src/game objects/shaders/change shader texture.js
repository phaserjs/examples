class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('metal', 'assets/textures/alien-metal.jpg');
        this.load.image('grass', 'assets/textures/grass.png');
        this.load.image('tiles', 'assets/textures/tiles.jpg');
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
        this.load.glsl('tunnel', 'assets/shaders/tunnel.frag');
    }

    create ()
    {
        // Phaser 4: Use config object for shader
        const shader = this.add.shader({
            name: 'TunnelShader',
            fragmentKey: 'tunnel',
            initialUniforms: {
                alpha: 1,
                origin: 2,
                resolution: [ 800, 600 ],
                iChannel0: 0 // texture unit 0
            },
            setupUniforms: (setUniform, drawingContext) =>
            {
                setUniform('time', this.game.loop.getDuration());
            },
        }, 400, 300, 800, 600, [ 'metal' ]);

        shader.setInteractive();

        shader.on('pointerdown', () =>
        {
            const currentTexture = shader.textures[0].key;

            if (currentTexture === 'metal')
            {
                shader.setTextures([ 'grass' ]);
            }
            else if (currentTexture === 'grass')
            {
                shader.setTextures([ 'tiles' ]);
            }
            else
            {
                shader.setTextures([ 'metal' ]);
            }
        });

        this.add.image(400, 300, 'logo');
        
        this.add.text(10, 10, 'Click to change texture', { font: '16px Courier', fill: '#ffffff' }).setShadow(1, 1);
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
