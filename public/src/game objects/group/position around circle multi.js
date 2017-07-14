var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var group;
var d = { v: 220 };

function preload ()
{
    this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
}

function create ()
{
    var circle = new Phaser.Geom.Circle(400, 300, d.v);

    group = this.add.group();

    group.createMultiple({ key: 'balls', frame: [0,1,5], repeat: 10 });

    group.placeOnCircle(circle);

    TweenMax.to(d, 3, {
        v: 100,
        delay: 2,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });
}

function update ()
{
    group.rotateAroundDistance({ x: 400, y: 300 }, 0.02, d.v);
}
