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
}

function create ()
{
    //  Edge bug fix
    this.add.sprite(0, 0, 'eye').setAlpha(0.1);

    var sprite = this.add.sprite(100, 300, 'eye');

    var shape = new Phaser.Geom.Rectangle(-64, -64, 128, 128);

    sprite.setHitArea(shape, Phaser.Geom.Rectangle.Contains);

    //  Enable continuous polling

    //  This will check the interactive objects even if you don't move the mouse
    //  So you can leave it in the path of the sprite and it will still fire
    //  over and out events while tweening across the screen, even if you don't
    //  move the mouse.

    this.input.setPollAlways();

    //  Events

    this.input.events.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });

    TweenMax.to(sprite, 5, {
        x: 800,
        yoyo: true,
        repeat: -1
    });
}
