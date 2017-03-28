var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('phaser', 'assets/sprites/phaser2.png');
}

function create ()
{
    var layer = this.add.layer();

    //  Create a Sprite via the Layer.

    //  The Sprite is added to the State display list, and to the Layer, at the same time.

    var sprite = layer.create(400, 300, 'phaser');

    //  The above is a short-cut for:
    //  var sprite = this.add.sprite(400, 300, 'phaser');
    //  layer.add(sprite);
}
