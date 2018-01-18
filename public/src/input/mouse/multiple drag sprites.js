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
    var sprite1 = this.add.sprite(200, 300, 'eye').setInteractive();
    var sprite2 = this.add.sprite(400, 300, 'eye').setInteractive();
    var sprite3 = this.add.sprite(600, 300, 'eye').setInteractive();

    this.input.setDraggable([ sprite1, sprite2, sprite3 ]);

    // this.input.events.on('DRAG_START_EVENT', function (event) {

    //     console.log('DRAG_START_EVENT', event.input.dragX, event.input.dragY);

    // });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.pointer.x - event.input.dragX;
        event.gameObject.y = event.pointer.y - event.input.dragY;

    });

    // this.input.events.on('DRAG_END_EVENT', function (event) {

    //     console.log('DRAG_END_EVENT');

    // });

    this.input.on('gameobjectdown', function (pointer, gameObject) {

        gameObject.setTint(0xff0000);

    });

    this.input.on('gameobjectup', function (pointer, gameObject) {

        gameObject.clearTint();

    });
}
