var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    console.log(this.sys.game.renderer.supportedExtensions);
    console.log(this.sys.game.renderer.config);
    console.log(this.sys.game.renderer.compression);

    text.setText([
        'Max Textures: ' + this.sys.game.renderer.getMaxTextures(),
        'Max Texture Size: ' + this.sys.game.renderer.getMaxTextureSize()
    ]);
}
