var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
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
    //  Create a stack of random cards

    var frames = this.textures.get('cards').getFrameNames();

    var x = 100;
    var y = 100;

    for (var i = 0; i < 64; i++)
    {
        var image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setInteractive();

        this.input.setDraggable(image);

        y += 4;
    }

    //  A drop zone
    this.add.zone(345, 0, 310, 300).setDropZone();

    //  Just a visual display of the drop zone
    var graphics = this.add.graphics();
    graphics.lineStyle(1, 0xffff00);
    graphics.strokeRect(345, 0, 310, 300);


    var _this = this;

    this.input.events.on('DRAG_START_EVENT', function (event) {

        _this.children.bringToTop(event.gameObject);

    });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

    });

    this.input.events.on('DROP_EVENT', function (event) {

        console.log('dropped into the zone');

        event.gameObject.x = event.dropZone.x;
        event.gameObject.y = event.dropZone.y;

        event.gameObject.input.enabled = false;

        event.gameObject.setAlpha(0.5);

    });

}