var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/sprites/wizball.png');
}

function create ()
{
    var sprite = this.add.sprite(400, 300, 'ball').setScale(2);

    var shape = new Phaser.Geom.Circle(0, 0, 45);

    sprite.setHitArea(shape, Phaser.Geom.Circle.Contains);

    //  Input Event listeners

    this.input.events.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.setTint(0x7878ff);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
