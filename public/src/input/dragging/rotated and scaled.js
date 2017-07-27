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
    this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
}

function create ()
{
    var image = this.add.image(400, 300, 'cards', 'clubsKing');

    //  Rotate it
    image.setAngle(45);

    //  Scale it
    // image.setScale(2);

    //  Make interactive
    image.setInteractive();

    //  Make draggable
    this.input.setDraggable(image);

    var _this = this;

    //  

    this.input.events.on('DRAG_START_EVENT', function (event) {

        //  489 x 282
        console.log('pointer x/y', event.x, event.y);

        //  50 x -75
        console.log('drag x/y', event.dragX, event.dragY);

        //  The local x/y is where in the GO it has been clicked, translated and normalized

        //  120 x 19
        console.log('local x/y', event.gameObject.input.localX, event.gameObject.input.localY);

        //  70x95
        console.log('origin x/y', event.gameObject.displayOriginX, event.gameObject.displayOriginY);

        _this.children.bringToTop(event.gameObject);

    });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

    });

}