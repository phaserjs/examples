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

    var shape = new Phaser.Geom.Rectangle(0, 0, 128, 128);

    sprite.setInteractive(shape, Phaser.Geom.Rectangle.Contains);

    //  Enable pointer polling only when you move the mouse

    //  This will check the pointer against the interactive objects only when you move the mouse
    //  If you leave the mouse in the path of the sprite and don't touch it,
    //  the sprite will *not* trigger the over/out events as it tweens across the screen.

    this.input.setPollOnMove();

    //  Events

    this.input.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });

    TweenMax.to(sprite, 5, {
        x: 800,
        yoyo: true,
        repeat: -1
    });
}
