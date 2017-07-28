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

    var x = 0;
    var y = 0;

    for (var i = 0; i < 64; i++)
    {
        var image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setInteractive();

        this.input.setDraggable(image);

        x += 4;
        y += 4;
    }

    //  Shrink the main camera
    this.cameras.main.setSize(511, 299).setZoom(0.5).setBackgroundColor('#000000');

    //  3 more cams
    this.cameras.add(513, 0, 511, 299).setZoom(0.5).setBackgroundColor('#0000aa');
    this.cameras.add(0, 301, 511, 299).setZoom(0.5).setBackgroundColor('#00aa00');
    this.cameras.add(513, 301, 511, 299).setZoom(0.5).setBackgroundColor('#aa0000');

    var _this = this;

    this.input.events.on('DRAG_START_EVENT', function (event) {

        _this.children.bringToTop(event.gameObject);

    });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

    });

}