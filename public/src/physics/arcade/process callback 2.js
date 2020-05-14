var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

var balls;

function preload ()
{
    this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
}

function create ()
{
    balls = this.physics.add.group({
        key: 'ball',
        frame: [ 0, 1, 2, 3, 4, 5 ],
        frameQuantity: 16,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 150,
        velocityY: 150,
    });

    Phaser.Actions.GridAlign(balls.getChildren(), {
        width: 8,
        height: 16,
        cellWidth: 34,
        cellHeight: 34,
        x: 34,
        y: 34
    });

    this.physics.add.collider(
        balls,
        undefined,
        undefined,
        function process (ballA, ballB)
        {
            return (ballA.frame === ballB.frame);
        }
    );
}
