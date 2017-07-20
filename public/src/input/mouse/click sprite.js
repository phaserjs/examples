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
    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    this.input.events.on('POINTER_DOWN_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('POINTER_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });

    this.input.events.on('POINTER_UP_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
