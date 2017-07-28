var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var cards;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
}

function create ()
{
    //  Create a stack of random cards
    cards = this.add.group();

    var frames = this.textures.get('cards').getFrameNames();

    for (var i = 0; i < 64; i++)
    {
        var x = Phaser.Math.Between(0, 1024);
        var y = Phaser.Math.Between(0, 600);

        var image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames));

        image.setInteractive();

        image.setScale(Phaser.Math.FloatBetween(0.25, 0.75));

        image.setAngle(Phaser.Math.Between(0, 359));

        this.input.setDraggable(image);

        cards.add(image);
    }

    var _this = this;

    this.input.events.on('DRAG_START_EVENT', function (event) {

        console.log('drag x/y', event.dragX, event.dragY);
        console.log('local x/y', event.gameObject.input.localX, event.gameObject.input.localY);

        _this.children.bringToTop(event.gameObject);

    });

    this.input.events.on('DRAG_EVENT', function (event) {

        event.gameObject.x = event.dragX;
        event.gameObject.y = event.dragY;

    });

}

function update ()
{
    cards.rotate(0.01);
}
