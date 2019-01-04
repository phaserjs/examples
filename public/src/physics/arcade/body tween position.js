var config = {
    type: Phaser.AUTO,
    antialias: false,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 300 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('dude', 'assets/sprites/phaser-dude.png');
}

function create ()
{
    var block = this.physics.add.image(400, 200, 'block')
        .setFriction(1, 1)
        .setImmovable(true);

    block.body.allowGravity = false;
    block.body.moves = false;

    var sprite = this.physics.add.image(400, 100, 'dude');

    this.tweens.add({
        targets: block,
        y: 400,
        duration: 2000,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    });

    this.physics.add.collider(sprite, block);
}
