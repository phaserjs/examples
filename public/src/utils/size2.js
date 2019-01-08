var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var debug = this.add.graphics();

    // var parent = new Phaser.Structs.Size(640, 480);
    var child = new Phaser.Structs.Size(300, 400, 2);

    console.log(child.toString());

    // debug.lineStyle(1.5, 0xff00ff).strokeRect(10, 10, parent.width, parent.height);
    debug.lineStyle(1.5, 0x00ff00).strokeRect(10, 10, child.width, child.height);

    this.input.on('pointermove', function (pointer) {

        child.setSize(pointer.x, pointer.y);

        // console.log(child.toString());

        debug.clear();
        // debug.lineStyle(1.5, 0xff00ff).strokeRect(10, 10, parent.width, parent.height);
        debug.lineStyle(1.5, 0x00ff00).strokeRect(10, 10, child.width, child.height);

    });
}
