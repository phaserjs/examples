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
    var image = this.add.sprite(200, 300, 'eye').setInteractive();

    this.input.setDraggable(image);

    //  The pointer has to move 16 pixels before it's considered as a drag
    this.input.dragDistanceThreshold = 16;

    this.input.on('DRAG_START_EVENT', function (event) {

        event.gameObject.setTint(0xff0000);

    });

    this.input.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

    });

    this.input.on('DRAG_END_EVENT', function (event) {

        event.gameObject.clearTint();

    });
}
