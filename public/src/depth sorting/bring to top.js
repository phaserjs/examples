var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    //  Create a stack of blocks

    var group = this.make.group({ key: 'block', frameQuantity: 12 });

    group.setXY(48, 500, 64, 0);

    var _this = this;

    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {

        var child = _this.children.getAt(0);

        child.y -= 32;

        _this.children.bringToTop(child);

    });

}
