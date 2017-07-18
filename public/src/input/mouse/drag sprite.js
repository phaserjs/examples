var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
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
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    var sprite1 = this.add.sprite(400, 300, 'eye');

    this.input.setHitArea(sprite1);

    //  GO, horizontal, vertical, callback (if callback returns false then drag is stopped?)
    this.input.enableDrag(sprite1, true, true);

    this.input.events.on('POINTER_DRAG_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
