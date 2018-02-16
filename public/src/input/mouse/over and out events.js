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
    window.scene = this;

    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    //  Events

    this.input.on('POINTER_OVER_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
