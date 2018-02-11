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

        y += 6;
    }

    //  A drop zone positioned at 600x300 with a circular drop zone 128px in radius
    var zone = this.add.zone(600, 300).setCircleDropZone(128);

    //  Just a visual display of the drop zone
    var graphics = this.add.graphics();
    graphics.lineStyle(2, 0xffff00);
    graphics.strokeCircle(zone.x, zone.y, zone.input.hitArea.radius);

    var _this = this;

    this.input.on('DRAG_START_EVENT', function (event) {

        _this.children.bringToTop(event.gameObject);

    });

    this.input.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

    });

    // this.input.on('DRAG_ENTER_EVENT', function (event) {

    //     graphics.clear();
    //     graphics.lineStyle(2, 0x00ffff);
    //     graphics.strokeRect(zone.x, zone.y, zone.width, zone.height);

    // });

    // this.input.on('DRAG_LEAVE_EVENT', function (event) {

    //     graphics.clear();
    //     graphics.lineStyle(2, 0xffff00);
    //     graphics.strokeRect(zone.x, zone.y, zone.width, zone.height);

    // });

    this.input.on('DROP_EVENT', function (event) {

        event.gameObject.x = event.dropZone.x;
        event.gameObject.y = event.dropZone.y;

        event.gameObject.input.enabled = false;

    });

    this.input.on('DRAG_END_EVENT', function (event) {

        if (!event.dropped)
        {
            event.gameObject.x = event.gameObject.input.dragStartX;
            event.gameObject.y = event.gameObject.input.dragStartY;
        }

        // graphics.clear();
        // graphics.lineStyle(2, 0xffff00);
        // graphics.strokeRect(zone.x, zone.y, zone.width, zone.height);

    });

}