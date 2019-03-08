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
var bob;
var ben;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/crate32.png');
    this.load.image('block2', 'assets/sprites/crate.png');
}

function create ()
{
    //  Immovable ben:

    //  bob x ben above = 204.66 to 204.0 (moved up the diff)
    //  bob x ben below = 331.33 to 332 (moved down the diff)

    //  ben x bob above = 204.66 to 204.0 (moved up the diff)
    //  ben x bob below = 331.33 to 332 (moved down the diff)

    //  Immovable ben ++

    //  bob x ben above = 204.66 to 204.0 (moved up the diff)
    //  bob x ben below = 331.33 to 332 (moved down the diff)

    bob = this.physics.add.image(400, 100, 'block2').setName('bob').setVelocityY(100).setCollideWorldBounds(true);

    ben = this.physics.add.image(400, 300, 'block2').setName('ben').setVelocityY(20).setCollideWorldBounds(true);

    // ben = this.physics.add.image(400, 300, 'block2').setName('ben').setImmovable().setCollideWorldBounds(true);

    // bob = this.physics.add.image(400, 500, 'block2').setName('bob').setVelocityY(-100).setCollideWorldBounds(true);


    // blocks.push(this.physics.add.image(50, 50, 'block2').setName(blocks.length).setCollideWorldBounds(true).setBounce(0));

    // this.input.on('pointerdown', function (pointer) {

    //     console.log(blocks[0].body.getMoveX(850));
    //     console.log(blocks[0].body.getMoveY(50));

    // }, this);

    // this.input.on('pointerdown', function (pointer) {

    //     blocks.push(this.physics.add.image(pointer.x, pointer.y, 'block').setName(blocks.length).setCollideWorldBounds(true).setBounce(0));

    // }, this);

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
}

function update ()
{
    this.physics.collide(bob, ben);

    // this.physics.collide(ben, bob);

    // for (var i = 0; i < 10; i++)
    // {
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
        'bob',
        'down: ' + bob.body.blocked.down,
        'y: ' + bob.body.y,
        'vy: ' + bob.body.velocity.y,
        'dy: ' + bob.body._dy,
        '',
        'ben',
        'down: ' + ben.body.blocked.down,
        'y: ' + ben.body.y,
        'vy: ' + ben.body.velocity.y,
        'dy: ' + ben.body._dy
    ]);
}
