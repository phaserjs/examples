var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#080808',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var data;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/sprites/blue_ball.png');
}

function create ()
{
    data = [];

    var balls = this.add.group({ key: 'ball', repeat: 30 });

    var circle = new Phaser.Geom.Circle(400, 300, 100);
    var triangle = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);

    balls.placeOnCircle(circle);

    balls.children.iterate(function (child) {

        data.set(child, [{ x: child.x, y: child.y }, { x: child.x, y: child.y }]);

        // data.circle.push({ x: child.x, y: child.y });

    });

    // balls.placeOnTriangle(triangle);

    // balls.children.iterate(function (child) {

    //     var childData = data.get(child);

    //     childData[1].x = child.x;
    //     childData[1].y = child.y;

    // });

    console.log(data);

    // balls.placeOnCircle(circle);

    /*
    this.tweens.add({

        targets: balls.getChildren(),
        ease: 'Quintic.easeInOut',
        duration: 3000,

        x: {

            getEnd: function (target, key, value)
            {
            },

            getStart: function (target, key, value)
            {
            }

        }

    });
    */
}
