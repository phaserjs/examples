var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var block;
var text;

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    block = this.physics.add.image(400, 100, 'block');

    block.body.setAllowDrag(false);
    block.setDrag(50, 50);
    block.setVelocity(100, 200);
    block.setBounce(1, 1);
    block.setCollideWorldBounds(true);

    // Alternative:
    // block.body.useDamping = true;
    // block.setDrag(0.95);

    text = this.add.text(20, 20);

    this.input.on('pointerup', function () {
        block.body.setAllowDrag(!block.body.allowDrag);
    });
}

function update ()
{
    block.body.debugBodyColor = block.body.allowDrag ? 0xff0000 : 0x00ff00;

    text.setText([
        'Click to toggle drag',
        '--',
        'allowDrag: ' + block.body.allowDrag,
        '   drag.x: ' + block.body.drag.x,
        '   drag.y: ' + block.body.drag.y
    ]);
}
