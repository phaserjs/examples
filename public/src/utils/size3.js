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

    var parent = new Phaser.Structs.Size(400, 300, 0);

    // var child = new Phaser.Structs.Size(180, 200, 0, parent).setSnap(50, 0);

    // var child = new Phaser.Structs.Size(180, 200, 1, parent).setSnap(0, 50);

    // var child = new Phaser.Structs.Size(180, 200, 2, parent).setSnap(50, 0);

    var child = new Phaser.Structs.Size(280, 150, 4, parent).setSnap(50, 0);

    debug.lineStyle(1.5, 0xffff00).strokeRect(1, 1, parent.width, parent.height);
    debug.lineStyle(1.5, 0x00ff00).strokeRect(1, 1, child.width, child.height);

    var text = this.add.text(0, 550, '', { fill: '#00ff00' });

    text.setText([ parent.toString(), child.toString() ]);

    this.input.on('pointermove', function (pointer) {

        child.setSize(pointer.x, pointer.y);

        // text.setText([ parent.toString(), child.toString() ]);

        text.setText([ child.toString() ]);

        // text.setText(child.width / child.height);

        debug.clear();
        debug.lineStyle(1.5, 0xffff00).strokeRect(1, 1, parent.width, parent.height);
        debug.lineStyle(1.5, 0x00ff00).strokeRect(1, 1, child.width, child.height);

    });
}
