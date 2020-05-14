var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            debugBodyColor: 0x00ffff
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('lemming', 'assets/sprites/lemming.png');
}

function create ()
{
    // The sprite texture is 62 x 48.
    // Size and offset coordinates are always in source pixels.

    // Original size, no offset.
    this.physics.add.image(250, 300, 'lemming')
        .setAlpha(0.6);

    // Thin lemming.
    // `center=true` (default) sets the offset automatically
    this.physics.add.image(350, 300, 'lemming')
        .setAlpha(0.6)
        .setSize(24, 48, true);

    // Wide lemming.
    this.physics.add.image(450, 300, 'lemming')
        .setAlpha(0.6)
        .setSize(62, 6, false)
        .setOffset(0, 20);

    // Lemming feet.
    this.physics.add.image(550, 300, 'lemming')
        .setAlpha(0.6)
        .setSize(24, 24, false)
        .setOffset(19, 24);

    var gf = this.add.graphics({ lineStyle: { width: 1, color: 0xffff00 } });

    this.physics.world.bodies.iterate(function (body)
    {
        gf.lineBetween(body.x, body.y, body.x - body.offset.x, body.y - body.offset.y);
    });

    this.cameras.main.setZoom(2).centerOn(400, 300);
}
