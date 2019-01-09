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

    var parent = new Phaser.Structs.Size(400, 280, 0);
    var child = new Phaser.Structs.Size(100, 190, Phaser.Structs.WIDTH_CONTROLS_HEIGHT, parent);

    debug.lineStyle(1.5, 0xffff00).strokeRect(1, 1, parent.width, parent.height);
    debug.lineStyle(1.5, 0x00ff00).strokeRect(1, 1, child.width, child.height);

    var text = this.add.text(0, 550, '', { fill: '#00ff00' });

    text.setText([ parent.toString(), child.toString() ]);

    this.input.on('pointermove', function (pointer) {

        child.setSize(pointer.x, pointer.y);

        text.setText([ parent.toString(), child.toString() ]);

        debug.clear();
        debug.lineStyle(1.5, 0xffff00).strokeRect(1, 1, parent.width, parent.height);
        debug.lineStyle(1.5, 0x00ff00).strokeRect(1, 1, child.width, child.height);

    });
}
