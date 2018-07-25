var config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('metal', 'assets/textures/alien-metal.jpg');
    this.load.image('bunny', 'assets/sprites/bunny.png');
}

function create ()
{
    // this.sys.game.renderer.blankTexture = this.textures.getFrame('metal').glTexture;
    this.sys.game.renderer.blankTexture = this.textures.getFrame('bunny').glTexture;

    var graphics = this.add.graphics();

    graphics.fillStyle(0x00ff00, 1);
    graphics.fillRect(100, 100, 256, 256);

    graphics.fillStyle(0xff0000, 0.5);
    graphics.fillRect(250, 200, 400, 256);
}
