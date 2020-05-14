// TODO

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: true }
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
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    var blocks = this.physics.add.group({
        defaultKey: 'block',
        bounceX: 1
    });

    var balls = this.physics.add.group({
        defaultKey: 'ball',
        bounceX: 1,
        velocityX: 200
    });

    balls.create(0, 100);
    balls.create(0, 200);
    balls.create(0, 300);
    balls.create(0, 400);
    balls.create(0, 500);

    blocks.create(300, 100).setDrag(0);
    blocks.create(300, 200).setDrag(50);
    blocks.create(300, 300).setDrag(100);
    blocks.create(300, 400).setDrag(150);
    blocks.create(300, 500).setDrag(200);

    this.physics.add.collider(balls, blocks);
}
