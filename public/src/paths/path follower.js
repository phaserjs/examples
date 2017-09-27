var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.image('ball', 'assets/sprites/shinyball.png');
    this.load.image('ball', 'assets/sprites/lemming.png');
}

function create ()
{
    var points = [];

    points.push(new Phaser.Math.Vector2(50, 400));
    points.push(new Phaser.Math.Vector2(200, 200));
    points.push(new Phaser.Math.Vector2(350, 300));
    points.push(new Phaser.Math.Vector2(500, 500));
    points.push(new Phaser.Math.Vector2(700, 400));

    var curve = new Phaser.Curves.Spline(points);

    var graphics = this.add.graphics();

    graphics.lineStyle(1, 0xffffff, 1);

    curve.draw(graphics, 64);

    graphics.fillStyle(0x00ff00, 1);

    for (var i = 0; i < points.length; i++)
    {
        graphics.fillCircle(points[i].x, points[i].y, 4);
    }

    var ball1 = this.add.follower(curve, 50, 400, 'ball');
    var ball2 = this.add.follower(curve, 50, 350, 'ball');
    var ball3 = this.add.follower(curve, 50, 300, 'ball');

    //  Providing just a number is giving a duration for following the path

    ball1.start(3000).setAutoRotate(true);
    ball2.start(4000);
    ball3.start(5000).setAutoRotate(true);

    /*
    ball.start({
        duration: 2000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
    });
    */
}
