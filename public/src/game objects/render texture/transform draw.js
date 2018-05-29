var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bunny', 'assets/sprites/bunny.png');
}

function create ()
{
    //  Create a Render Texture at 0x0 which is 800x600 in size
    var rt = this.add.renderTexture(0, 0, 800, 600);

    //  Get a texture to draw with
    var bunny = this.textures.getFrame('bunny');

    rt.rotate(0.9);
    rt.scale(0.5, 0.5);
    rt.translate(600, 200);

    rt.draw(bunny.texture, bunny, 200, 0);

}
