class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('wheel', 'assets/pics/large-color-wheel.png');
    }

    create ()
    {
        this.add.image(400, 300, 'wheel');

        // this.texture = this.textures.addDynamicTexture('test', 800, 600);

        this.texture = this.add.renderTexture(400, 300, 100, 100);
    }

    update ()
    {
        this.texture.beginDraw();
        this.texture.endDraw();
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
