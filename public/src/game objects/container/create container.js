var config = {
    type: Phaser.WEBGL,
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
    this.load.image('ball', 'assets/demoscene/doc-ball.png');
}

function create ()
{
    var balls = this.add.container(400, 300);

    var ball1 = this.add.image(0, 0, 'ball');

    balls.add(ball1);

    balls.x += 100;
    balls.y += 100;

    console.log(ball1);
    console.log(balls);
}
