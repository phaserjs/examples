function preload ()
{
    this.load.image('apple', 'assets/sprites/apple.png');
    this.load.image('metal', 'assets/textures/alien-metal.jpg');
    this.load.glsl('bundle', 'assets/shaders/bundle.glsl.js');
}

function create()
{
    const rt = this.add.renderTexture(0, 0, 512, 512);

    rt.fill(0xff0000, 1, 0, 0, 512, 512);

    this.add.image(0, 0, 'apple').setOrigin(0, 0);

    rt.saveTexture('rt');

    const shader = this.add.shader('Tunnel', 450, 350, 800, 600, [ 'metal' ]);
    // const shader = this.add.shader('Tunnel', 450, 350, 800, 600, [ 'rt' ]);
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
  };

const game = new Phaser.Game(config);
