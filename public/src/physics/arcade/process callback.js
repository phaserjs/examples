var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            debugShowVelocity: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
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
    var graphics = this.add.graphics();

    var polygon = new Phaser.Geom.Polygon([
        200, 150,
        400, 300,
        600, 150,
        750, 300,
        600, 450,
        200, 450,
        50, 300
    ]);

    var bounds = Phaser.Geom.Polygon.GetAABB(polygon);

    var zone = this.add.zone(bounds.x, bounds.y, bounds.width, bounds.height)
        .setOrigin(0);

    // Static body
    this.physics.add.existing(zone, true);

    balls = this.physics.add.group({
        key: 'ball',
        frameQuantity: 48,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 180,
        velocityY: 120,
    });

    Phaser.Actions.RandomRectangle(balls.getChildren(), this.physics.world.bounds);

    this.physics.add.overlap(
        zone,
        balls,
        null,
        function process (_zone, ball)
        {
            return Phaser.Geom.Polygon.ContainsPoint(polygon, ball.body.center);
        }
    );

    graphics.fillStyle(0x333333);
    graphics.fillPoints(polygon.points, true);
}

function update ()
{
    balls.children.iterate(function (ball)
    {
        ball.setFrame(ball.body.touching.none ? 0 : 5);
    });
}
