var config = {
    type: Phaser.AUTO,
    width: 864,
    height: 632,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/sprites');
    this.load.image('blockANP');
    this.load.image('blockBNP');
}

var cursors
var left
var active

function create ()
{
    this.physics.world.setBounds(0, 0, 864, 632);

    cursors = this.input.keyboard.createCursorKeys();

    left = this.physics.add.image(200, 196-16, 'blockANP').setCollideWorldBounds().setInteractive();
    var right = this.physics.add.image(600, 196-16, 'blockBNP').setCollideWorldBounds().setInteractive();

    left.setBounce(0.5);
    right.setBounce(0.5);

    // If either one of these are a circle they will get pushed.

    // left.setCircle(32)
    right.setCircle(32)

    active = left

    this.input.on('pointerdown', () => {

        if (active === left)
        {
            active = right;
        }
        else
        {
            active = left;
        }

    });

    left.setPushable(false);
    right.setPushable(false);

    this.physics.add.collider(left, right);
}

function update ()
{
    if (cursors.left.isDown)
    {
        active.setVelocityX(-160);
    }
    else if (cursors.right.isDown)
    {
        active.setVelocityX(160);
    }
    else if (cursors.up.isDown)
    {
        active.setVelocityY(-160);
    }
    else if (cursors.down.isDown)
    {
        active.setVelocityY(160);
    }
    else {
        active.setVelocity(0)
    }
}
