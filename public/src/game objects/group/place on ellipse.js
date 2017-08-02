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

var group;
var ellipse;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    ellipse = new Phaser.Geom.Ellipse(400, 300, 200, 500);

    group = this.add.group();

    group.createMultiple({ key: 'ball', frameQuantity: 48 });

    group.placeOnEllipse(ellipse);

    TweenMax.to(ellipse, 3, {
        width: 700,
        height: 100,
        delay: 1,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });
}

function update ()
{
    group.placeOnEllipse(ellipse);
}
