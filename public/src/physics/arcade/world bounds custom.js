var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {

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
    this.load.image('bg', 'assets/skies/space2.png');
    this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
}

function create ()
{
    this.add.image(400, 300, 'bg');

    var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff0000 }});

    // Balls should have this rectangle as a boundary instead of the world bounds
    var customBoundsRect = new Phaser.Geom.Rectangle(100, 100, 400, 400);

    // Draw the bounds rectangle
    graphics.strokeRectShape(customBoundsRect);
    graphics.lineStyle(2, 0xffff00);

    var group = this.physics.add.group({
        key: 'ball',
        frameQuantity: 4,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        // Set the new boundary rectangle
        customBoundsRectangle: customBoundsRect,
        velocityX: 180,
        velocityY: 120
    });

    Phaser.Actions.RandomRectangle(group.getChildren(), customBoundsRect);

    // World bounds are now set to the custom rectangle
    // Call onBoundsHit if a ball hits the new boundary
    Phaser.Actions.Call(group.getChildren(), function (ball) {
        ball.body.onWorldBounds = true;
    });
    this.physics.world.on('worldbounds', onBoundsHit);

    // Other balls still collide with the world bounds
    var group = this.physics.add.group({
        key: 'ball',
        frameQuantity: 2,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 180,
        velocityY: 120
    });

    Phaser.Actions.RandomRectangle(group.getChildren(), this.physics.world.bounds);
}

function onBoundsHit (body)
{
    var ball = body.gameObject;
    var frame = ball.frame.name;

    frame += 1;
    frame %= 5;

    ball.setFrame(frame);
}
