var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    pixelArt: true,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('chick', 'assets/sprites/budbrain_chick.png');
}

function create ()
{
    var sprite = this.add.sprite(400, 300, 'chick').setScale(3);

    var shape = new Phaser.Geom.Ellipse(-33, -66, 66, 133);

    sprite.setHitArea(shape, Phaser.Geom.Ellipse.Contains);

    //  Input Event listeners

    this.input.events.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.setTint(0x7878ff);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
