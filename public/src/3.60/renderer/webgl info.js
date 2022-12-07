class Example extends Phaser.Scene
{
    create ()
    {
        const style = { font: '16px Courier', fill: '#00ff00' };

        this.add.text(10, 10, 'WebGL Config', { font: '32px Courier', fill: '#00ff00' });

        this.add.text(10, 60, [ 'Supported Extensions', '--------------------', '' ].concat(this.renderer.supportedExtensions), style);

        const config = [];

        for (let key in this.renderer.config)
        {
            config.push(`${key}: ${this.renderer.config[key]}`);
        }

        this.add.text(500, 60, [ 'Renderer Config', '---------------', '' ].concat(config), style);

        const compression = [];

        for (let key in this.renderer.compression)
        {
            compression.push(`${key}: ${this.renderer.compression[key]}`);
        }

        this.add.text(500, 300, [ 'Texture Compression', '-------------------', '' ].concat(compression), style);

        this.add.text(500, 450, [ 'WebGL Textures', '--------------', '', `Max Textures: ${this.renderer.maxTextures}`, `Max Texture Size: ${this.renderer.getMaxTextureSize()}` ], style);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
