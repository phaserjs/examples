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
    this.load.atlas('megaset', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
}

function create ()
{
    var graphics = this.add.graphics();

    graphics.setTexture('megaset', 'contra1');

    graphics.fillStyle(0x00ff00, 1);
    graphics.fillRect(100, 100, 256, 256);

    graphics.fillStyle(0xff0000, 0.5);
    graphics.fillRect(250, 200, 400, 256);
}
