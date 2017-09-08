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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('star', 'assets/demoscene/star.png');
}

function create ()
{
    var stars = this.add.group({ key: 'star', repeat: 30 });

    var circle = new Phaser.Geom.Circle(400, 300, 32);

    stars.placeOnCircle(circle);

    this.tweens.add({
        targets: circle,
        radius: 200,
        ease: 'Quintic.easeInOut',
        duration: 1500,
        yoyo: true,
        repeat: -1,
        onUpdate: function ()
        {
            stars.rotateAroundDistance({ x: 400, y: 300 }, 0.02, circle.radius);
        }
    });
}
