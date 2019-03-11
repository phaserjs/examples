var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var text;
var blocks = [];
var mushroom;
var block;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/crate32.png');
    this.load.image('block2', 'assets/sprites/crate.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
}

function create ()
{
    //  overlap = 1.5 (mushroom DOWN onto block, m v b)
    //  overlap = -1.5 (mushroom DOWN onto block, b v m)

    //  So, even though they were moving in the same direction, the overlap is negative because
    //  we were checking them in a different order.

    //  Positive overlap = BOTTOM of body A
    //  Negative overlap = TOP of body A

    //  We cannot rely on overlap to tell us the face of collision

    // mushroom = this.physics.add.image(410, 100, 'mushroom').setName('mushroom').setVelocityY(100).setCollideWorldBounds(true);
    // block = this.physics.add.image(400, 170, 'block2').setName('block').setVelocityY(200).setCollideWorldBounds(true);

    // mushroom = this.physics.add.image(410, 400, 'mushroom').setName('mushroom').setVelocityY(100).setCollideWorldBounds(true);
    // block = this.physics.add.image(400, 300, 'block2').setName('block').setVelocityY(120).setCollideWorldBounds(true);

    mushroom = this.physics.add.image(410, 400, 'mushroom').setName('mushroom').setVelocityY(100).setCollideWorldBounds(true);
    block = this.physics.add.image(400, 300, 'block2').setName('block').setVelocityY(120).setCollideWorldBounds(true);

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
}

function update (time)
{
    this.physics.collide(mushroom, block);
    // this.physics.collide(block, mushroom);

    // for (var i = 0; i < 10; i++)
    // {
        // this.physics.collide(block, mushroom);
        // this.physics.collide(blocks);
    // }

    // var t = [];

    // blocks.forEach(function(block, i) {

    //     var body = block.body;

    //     t.push(i, 'down: ' + body.blocked.down, 'y: ' + body.y, 'vy: ' + body.velocity.y, 'dy: ' + body._dy, '');
        // t.push(i, 'up: ' + body.blocked.up, 'down: ' + body.blocked.down, 'y: ' + body.y, 'vy: ' + body.velocity.y, 'dy: ' + body._dy, '');

    // });

    // text.setText(t);

    text.setText([
        'mushroom',
        'tup: ' + mushroom.body.touching.up,
        'tdown: ' + mushroom.body.touching.down,
        'wup: ' + mushroom.body.worldBlocked.up,
        'up: ' + mushroom.body.blocked.up,
        'down: ' + mushroom.body.blocked.down,
        'y: ' + mushroom.body.y,
        'bot: ' + mushroom.body.bottom,
        'vy: ' + mushroom.body.velocity.y,
        'dy: ' + mushroom.body._dy,
        '',
        'block',
        'tup: ' + block.body.touching.up,
        'tdown: ' + block.body.touching.down,
        'up: ' + block.body.blocked.up,
        'down: ' + block.body.blocked.down,
        'wdown: ' + block.body.worldBlocked.down,
        'y: ' + block.body.y,
        'bot: ' + block.body.bottom,
        'vy: ' + block.body.velocity.y,
        'dy: ' + block.body._dy
    ]);


}
