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
    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    this.input.setDraggable(sprite);

    window.scene = this;

    /*
    this.input.on('DRAG_START_EVENT', function (event) {

        console.log('DRAG_START_EVENT', event.input.dragX, event.input.dragY);

    });

    this.input.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.pointer.x - event.input.dragX;
        event.gameObject.y = event.pointer.y - event.input.dragY;

    });

    this.input.on('DRAG_END_EVENT', function (event) {

        console.log('DRAG_END_EVENT');

    });
    */

    this.input.on('POINTER_OVER_EVENT', function (event) {

        console.log('POINTER_OVER_EVENT');

        event.gameObject.setTint(0xff0000);

    });

    this.input.on('POINTER_OUT_EVENT', function (event) {

        console.log('POINTER_OUT_EVENT');

        if (!event.gameObject.input.isDragged)
        {
            event.gameObject.clearTint();
        }

    });
}
