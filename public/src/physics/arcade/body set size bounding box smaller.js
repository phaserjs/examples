var config = {
    type: Phaser.AUTO,
    antialias: false,
    width: 800,
    height: 600,
    backgroundColor: 0x666666,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {debug: true}
    },
    scene: {
        preload: preload,
        create: create
    }
};

new Phaser.Game(config);

function preload ()
{
    this.load.image('lemming', 'assets/sprites/lemming.png');
}

function create ()
{
    var lemming = this.physics.add.image(400, 300, 'lemming');

    //  In this example the new collision box is smaller than the original sprite
    //
    // original size: 62 x 48
    //      new size: 24 x 48
    //
    // The 'true' argument means "center it on the gameobject"
    lemming.setSize(24, 48, true);

    // You can also position the body manually.
    // This is centered horizontally but shifted toward the lemming's feet.
    // lemming.setSize(24, 32).setOffset(19, 16);
}
