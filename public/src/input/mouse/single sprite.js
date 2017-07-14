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
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    this.load.image('b', 'assets/sprites/block.png');
}

function create ()
{
    var sprite = this.add.sprite(400, 300, 'eye');
    var sprite2 = this.add.text(400, 300, 'hello');
    // var sprite3 = this.add.sprite(100, 300, 'eye');

    // var shape = new Phaser.Geom.Rectangle(-64, -64, 128, 128);

    // sprite.setHitArea(shape, Phaser.Geom.Rectangle.Contains);

    // this.input.events.on('POINTER_OVER_EVENT', function (event) {

    //     event.gameObject.setTint(0xff0000);

    // });

    // this.input.events.on('POINTER_OUT_EVENT', function (event) {

    //     event.gameObject.clearTint();

    // });
}
