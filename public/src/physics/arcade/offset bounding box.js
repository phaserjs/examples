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
    this.add.grid(0, 0, 62 * 10, 48 * 3, 62, 48).setAlpha(0.2);

    // The sprite texture is 62 x 48.
    // Size and offset coordinates are always in source pixels.

    // Original size, no offset.
    this.physics.add.image(-4 * 62, 0, 'lemming')
        .setAlpha(0.6);

    // Thin lemming.
    // `center=true` (default) sets the offset automatically
    this.physics.add.image(-2 * 62, 0, 'lemming')
        .setAlpha(0.6)
        .setSize(24, 48, true);

    // Wide lemming.
    this.physics.add.image(0 * 62, 0, 'lemming')
        .setAlpha(0.6)
        .setSize(62, 6, false)
        .setOffset(0, 20);

    // Lemming head.
    this.physics.add.image(2 * 62, 0, 'lemming')
        .setAlpha(0.6)
        .setSize(24, 24, false)
        .setOffset(19, 0);

    // Lemming feet.
    this.physics.add.image(4 * 62, 0, 'lemming')
        .setAlpha(0.6)
        .setSize(24, 24, false)
        .setOffset(19, 24);

    var graphics = this.add.graphics({ fillStyle: { color: 0xff0000 }, lineStyle: { width: 1, color: 0xffff00 } });

    this.physics.world.bodies.iterate(function (body)
    {
        // Body offset will be applied at next physics step, so we can see it here:
        graphics.lineBetween(body.x, body.y, body.x + body.offset.x, body.y + body.offset.y);
        graphics.fillPointShape(body.position, 4);
    });

    this.cameras.main.setZoom(1).centerOn(0, 0);
}
