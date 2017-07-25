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
    this.add.sprite(200, 300, 'eye').setInteractive();
    this.add.sprite(400, 300, 'eye').setInteractive();
    this.add.sprite(600, 300, 'eye').setInteractive();

    this.input.events.on('GAME_OBJECT_OVER_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('GAME_OBJECT_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
