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

function create()
{
    this.input.addPointer();

    var circ = this.add.circle(300, 200, 96, 0xffff00);

    circ.setInteractive();

    this.input.setDraggable(circ);

    circ.on('drag', function (p, x, y) {

        circ.x = x;
        circ.y = y;

    });

    var testRect = this.add.rectangle(400, 0, 128, 128, 0x00ffff);

    this.tweens.add({
        targets: testRect,
        angle: 360,
        repeat: -1,
        duration: 2000
    });

    var killRect = this.add.rectangle(0, 0, 128, 128, 0xff0000).setOrigin(0, 0);

    killRect.setInteractive();

    killRect.once('pointerdown', function () {

        circ.destroy();

    });

    this.input.keyboard.once('keydown_A', function () {

        circ.destroy();

    });

    this.input.keyboard.once('keydown-A', function () {

        circ.destroy();

    });
}
