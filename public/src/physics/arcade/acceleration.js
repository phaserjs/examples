// TODO
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var bubbles;

function preload ()
{
    this.load.image('bubble', 'assets/particles/bubble.png');
}

function create ()
{
    bubbles = this.physics.add.group({
        key: 'bubble',
        quantity: 10,
        setXY: { x: 100, y: 600, stepX: 100 }
    });

    bubbles.children.iterate(function (bubble)
    {
        bubble.setScale(Phaser.Math.FloatBetween(0.5, 1));
        bubble.setAccelerationY(Phaser.Math.Between(-100, -25));
        bubble.setMaxVelocity(300);
        bubble.setVelocityX(Phaser.Math.Between(-50, 50));
    });
}

function update ()
{
    this.physics.world.wrap(bubbles, 32);
}
