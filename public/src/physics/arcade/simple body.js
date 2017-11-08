var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var block;
var block2;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    block = this.add.image(100, 100, 'block');

    block2 = this.add.image(400, 100, 'block');

    this.physics.world.enable(block);
    this.physics.world.enable(block2);

    block.body.collideWorldBounds = true;
    block.body.velocity.set(100, 200);
    block.body.bounce.set(1, 1);

    block2.body.collideWorldBounds = true;
    block2.body.velocity.set(100, 200);
    block2.body.bounce.set(1, 1);

    console.log(this.physics.world);
    console.log(block.body);
}

function update ()
{
    this.physics.world.collide(block, block2);
}
