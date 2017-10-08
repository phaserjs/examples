var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ship', 'assets/sprites/thrust_ship2.png');
}

function create ()
{
    var sprite = this.add.sprite(400, 300, 'ship').setScale(8);

    var shape = new Phaser.Geom.Triangle.BuildEquilateral(16, 0, 30);

    sprite.setInteractive(shape, Phaser.Geom.Triangle.Contains);

    //  Input Event listeners

    this.input.events.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.setTint(0x7878ff);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });

    //  Draw the shape
    // var graphics = this.add.graphics({ x: sprite.x / 8, y: sprite.y / 8 });

    // graphics.lineStyle(1/8, 0x00aa00);

    // graphics.scale(8, 8);

    // graphics.strokeTriangleShape(shape);
}
