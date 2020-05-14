var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var block;

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    block = this.physics.add.image(400, 100, 'block');

    block.setMaxVelocity(400, 400);
    block.setVelocity(100, 200);
}

function update ()
{
    this.physics.world.wrap(block, 48);
}
