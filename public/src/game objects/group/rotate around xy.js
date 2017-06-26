var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var group;
var p;

function preload ()
{
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
}

function create ()
{
    group = this.add.group();

    for (var i = 0; i < 256; i++)
    {
        var image = this.add.image(Phaser.Math.Between(200, 600), Phaser.Math.Between(100, 500), 'diamonds', Phaser.Math.Between(0, 4));

        group.add(image);
    }

    p = new Phaser.Geom.Point(400, 300);

    window.addEventListener('mousemove', function (event) {
        p.setTo(event.clientX, event.clientY);
    });
}

function update ()
{
    group.rotateAroundDistance(p, 0.1, 100);
}
