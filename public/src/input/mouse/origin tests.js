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
    // var c = this.sys.game.canvas;
    // c.width = 400;
    // c.height = 300;
    // this.sys.game.renderer.resize(400, 300);

    // var sprite1 = this.add.sprite(400, 300, 'eye').setScale(2).setAngle(45);
    var sprite1 = this.add.sprite(400, 300, 'eye');

    this.input.setHitAreaFromTexture(sprite1);

    this.input.events.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.alpha = 0.5;
        // event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.alpha = 1;
        // event.gameObject.clearTint();

    });
}
