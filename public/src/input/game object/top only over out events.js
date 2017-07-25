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
    this.add.sprite(350, 250, 'eye').setInteractive();
    this.add.sprite(400, 300, 'eye').setInteractive();
    this.add.sprite(450, 350, 'eye').setInteractive();

    //  If you disable topOnly it will fire events for all objects the pointer is over
    //  regardless of their place on the display list
    this.input.topOnly = false;

    //  Events

    this.input.events.on('GAME_OBJECT_OVER_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.events.on('GAME_OBJECT_OUT_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
