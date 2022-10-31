class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('uv', 'assets/pics/uv-grid-4096-ian-maclachlan.png');
    }

    create ()
    {
        /*
        this.add.image(400, 300, 'uv');

        this.renderer.snapshot(image => {

            document.body.appendChild(image);

        });
        */

        const texture = this.textures.addDynamicTexture('test', 4096, 4096);

        texture.stamp('uv', null, 2048, 2048);

        texture.snapshot(image => {

            document.body.appendChild(image);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Example
};

const game = new Phaser.Game(config);
