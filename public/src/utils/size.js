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

    var boxA = new Phaser.Structs.Size(320, 240);
    var boxB = new Phaser.Structs.Size(300, 400);

    console.log(boxA.toString());
    console.log(boxB.toString());

    debug.lineStyle(1.5, 0xff00ff).strokeRect(10, 10, boxB.width, boxB.height);
    debug.lineStyle(1.5, 0x00ff00).strokeRect(10, 10, boxA.width, boxA.height);

    this.input.once('pointerdown', function () {

        boxA.fitTo(boxB.width, boxB.height);
        // boxA.envelope(boxB.width, boxB.height);

        // debug.clear();
        // debug.lineStyle(1.5, 0xff00ff).strokeRect(10, 10, boxB.width, boxB.height);
        debug.lineStyle(1.5, 0xffff00).strokeRect(10, 10, boxA.width, boxA.height);

        console.log(boxA.toString());

    });

}
