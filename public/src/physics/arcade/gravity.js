var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 60 }
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
}

function create ()
{
    this.physics.world.gravity.y = 60;

    var group = this.physics.add.group({
        defaultKey: 'block',
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true
    });

    group.create(200, 300);
    group.create(300, 300).setGravity(0, 120);
    group.create(400, 300).setGravity(0, -120);
    group.create(500, 300, 'block').body.allowGravity = false;
}
